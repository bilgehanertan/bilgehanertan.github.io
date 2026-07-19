---
layout: page
permalink: /repositories/
title: repositories
description: Open-source projects I build and/or contribute to across different organizations.
nav: true
nav_order: 3
---

<div class="repo-grid">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>

{% raw %}
<style>
  .repo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
    gap: 1.25rem;
    margin-top: 1.5rem;
  }

  .repo-card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 158px;
    padding: 1.15rem 1.25rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 14px;
    background: var(--global-card-bg-color, #fff);
    color: var(--global-text-color);
    text-decoration: none;
    overflow: hidden;
    transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
  }

  .repo-card:hover {
    transform: translateY(-3px);
    border-color: var(--global-theme-color);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.13);
  }

  .repo-card-accent {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--global-theme-color), transparent 88%);
    opacity: 0;
    transition: opacity 0.18s ease;
  }
  .repo-card:hover .repo-card-accent { opacity: 1; }

  .repo-card-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    margin-bottom: 0.55rem;
  }

  .repo-card-owner {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    min-width: 0;
    font-size: 0.8rem;
    color: var(--global-text-color-light);
  }
  .repo-card-owner-icon { font-size: 0.95rem; flex: none; }
  .repo-card-owner-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .repo-card-badge {
    flex: none;
    font-size: 0.66rem;
    font-weight: 600;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    padding: 0.12rem 0.5rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 999px;
    color: var(--global-text-color-light);
  }

  .repo-card-name {
    margin: 0 0 0.5rem 0;
    font-size: 1.06rem;
    font-weight: 700;
    line-height: 1.25;
    color: var(--global-theme-color);
    word-break: break-word;
  }

  .repo-card-desc {
    margin: 0 0 1rem 0;
    font-size: 0.85rem;
    line-height: 1.45;
    color: var(--global-text-color-light);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    flex: 1 1 auto;
  }

  .repo-card-meta {
    display: flex;
    align-items: center;
    gap: 1.1rem;
    margin-top: auto;
    font-size: 0.8rem;
    color: var(--global-text-color-light);
  }

  .repo-card-lang { display: inline-flex; align-items: center; gap: 0.4rem; }
  .repo-card-lang-dot {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #8b949e;
    flex: none;
  }
  .repo-card-stat { display: inline-flex; align-items: center; gap: 0.32rem; }
  .repo-card-stat i { font-size: 0.82rem; opacity: 0.85; }

  /* Loading skeleton */
  .repo-skel {
    display: block;
    height: 0.72rem;
    margin: 0.32rem 0;
    border-radius: 5px;
    background: linear-gradient(
      90deg,
      rgba(128, 128, 128, 0.1) 25%,
      rgba(128, 128, 128, 0.22) 37%,
      rgba(128, 128, 128, 0.1) 63%
    );
    background-size: 400% 100%;
    animation: repo-shimmer 1.4s ease infinite;
  }
  .repo-skel-line.is-short { width: 55%; }
  .repo-card:not(.is-loading) .repo-skel { display: none; }
  .repo-card.is-loading .repo-card-meta { opacity: 0.35; }

  @keyframes repo-shimmer {
    0% { background-position: 100% 0; }
    100% { background-position: -100% 0; }
  }

  @media (prefers-reduced-motion: reduce) {
    .repo-skel { animation: none; }
    .repo-card { transition: none; }
  }
</style>

<script>
  (function () {
    // A handful of GitHub's official language colors; everything else falls back to grey.
    const LANG_COLORS = {
      "Python": "#3572A5", "Jupyter Notebook": "#DA5B0B", "JavaScript": "#f1e05a",
      "TypeScript": "#3178c6", "Java": "#b07219", "C": "#555555", "C++": "#f34b7d",
      "C#": "#178600", "Go": "#00ADD8", "Rust": "#dea584", "Ruby": "#701516",
      "PHP": "#4F5D95", "Shell": "#89e051", "HTML": "#e34c26", "CSS": "#563d7c",
      "SCSS": "#c6538c", "Vue": "#41b883", "Swift": "#F05138", "Kotlin": "#A97BFF",
      "Dart": "#00B4AB", "Scala": "#c22d40", "R": "#198CE7", "MATLAB": "#e16737",
      "Julia": "#a270ba", "Lua": "#000080", "Perl": "#0298c3", "Haskell": "#5e5086",
      "TeX": "#3D6117", "Dockerfile": "#384d54", "Objective-C": "#438eff"
    };

    const TTL = 6 * 60 * 60 * 1000; // cache GitHub responses for 6 hours

    function fmt(n) {
      if (n === null || n === undefined) return "0";
      if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "k";
      return String(n);
    }

    function apply(card, d) {
      const desc = card.querySelector(".repo-card-desc");
      const langWrap = card.querySelector(".repo-card-lang");
      const langDot = card.querySelector(".repo-card-lang-dot");
      const langName = card.querySelector(".repo-card-lang-name");
      const stars = card.querySelector(".repo-card-stars-count");
      const forks = card.querySelector(".repo-card-forks-count");

      if (desc) desc.textContent = d.description || "No description provided.";
      if (d.language && langWrap && langName && langDot) {
        langName.textContent = d.language;
        langDot.style.background = LANG_COLORS[d.language] || "#8b949e";
        langWrap.hidden = false;
      }
      if (stars) stars.textContent = fmt(d.stargazers_count);
      if (forks) forks.textContent = fmt(d.forks_count);
      card.classList.remove("is-loading");
    }

    function readCache(repo) {
      try {
        const o = JSON.parse(localStorage.getItem("repocache:" + repo));
        return o && o.d ? o : null;
      } catch (e) {
        return null;
      }
    }

    function load(card) {
      const repo = card.getAttribute("data-repo");
      if (!repo) return;

      const cached = readCache(repo);
      if (cached && Date.now() - cached.t < TTL) {
        apply(card, cached.d);
        return;
      }

      fetch("https://api.github.com/repos/" + repo, {
        headers: { Accept: "application/vnd.github+json" }
      })
        .then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
        .then(function (data) {
          if (data && data.message) throw new Error(data.message);
          const d = {
            description: data.description,
            language: data.language,
            stargazers_count: data.stargazers_count,
            forks_count: data.forks_count
          };
          try {
            localStorage.setItem("repocache:" + repo, JSON.stringify({ t: Date.now(), d: d }));
          } catch (e) { /* storage full / disabled — ignore */ }
          apply(card, d);
        })
        .catch(function () {
          // Rate-limited or offline: fall back to stale cache, else a graceful default.
          if (cached) { apply(card, cached.d); return; }
          const desc = card.querySelector(".repo-card-desc");
          if (desc) desc.textContent = "View this repository on GitHub.";
          card.classList.remove("is-loading");
        });
    }

    function init() {
      document.querySelectorAll(".repo-card[data-repo]").forEach(load);
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  })();
</script>
{% endraw %}

---
title: "Beyond Anonymization: Object Scrubbing for Privacy-Preserving 2D and 3D Vision Tasks"
collection: publications
permalink: /publication/2025-object-scrubbing
excerpt: 'Introduced ROAR, a scalable privacy-preserving framework that removes sensitive objects using segmentation and generative inpainting while preserving dataset utility for 2D and 3D vision tasks.'
date: 2025-03-01
venue: "Master's Thesis, Vrije Universiteit Amsterdam (Grade: 10/10)"
paperurl: 'https://arxiv.org/abs/2504.16557'
---

We introduce ROAR (Robust Object Removal and Re-annotation), a scalable framework for privacy-preserving dataset obfuscation that removes sensitive objects instead of modifying them. Designed for practical deployment, our method integrates instance segmentation with generative inpainting to eliminate identifiable entities while preserving scene integrity. Extensive evaluations on 2D COCO-based object detection show that ROAR achieves 87.5% of baseline average precision (AP), whereas image dropping achieves only 74.2%, highlighting the advantage of scrubbing in preserving dataset utility. In NeRF-based 3D reconstruction, our method incurs a PSNR loss of at most 1.66,dB while maintaining SSIM and improving LPIPS, demonstrating superior perceptual quality. ROAR follows a structured pipeline of detection, inpainting-based removal, re-annotation, and evaluation. We systematically evaluate the privacy-utility trade-off across both 2D and 3D tasks, showing that object removal offers a more effective balance than traditional methods. Our findings establish ROAR as a practical privacy framework, achieving strong guarantees with minimal performance trade-offs. The results highlight challenges in generative inpainting, occlusion-robust segmentation, and task-specific scrubbing, laying the groundwork for real-world privacy-preserving vision systems.

```
@article{DBLP:journals/corr/abs-2504-16557,
  author       = {Murat Bilgehan Ertan and
                  Ronak Sahu and
                  Phuong Ha Nguyen and
                  Kaleel Mahmood and
                  Marten van Dijk},
  title        = {Beyond Anonymization: Object Scrubbing for Privacy-Preserving 2D and
                  3D Vision Tasks},
  journal      = {CoRR},
  volume       = {abs/2504.16557},
  year         = {2025},
  url          = {https://doi.org/10.48550/arXiv.2504.16557},
  doi          = {10.48550/ARXIV.2504.16557},
  eprinttype    = {arXiv},
  eprint       = {2504.16557},
  timestamp    = {Sat, 31 May 2025 23:14:57 +0200},
  biburl       = {https://dblp.org/rec/journals/corr/abs-2504-16557.bib},
  bibsource    = {dblp computer science bibliography, https://dblp.org}
}
```
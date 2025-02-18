---
title: "Unveiling Cyber Threat Actors: A Hybrid Deep Learning Approach for Behavior-based Attribution"
collection: publications
permalink: /publication/2024-unveiling-cta
excerpt: 'Developed a hybrid deep learning approach for behavior-based threat actor attribution, employing natural language processing and machine learning.'
date: 2024-07-02
venue: 'ACM Journal: Digital Threats: Research and Practice (DTRAP)'
paperurl: 'https://doi.org/10.1145/3676284'
---

In this paper, we leverage natural language processing and machine learning algorithms to profile threat actors based on their behavioral signatures to establish identification for soft attribution. Our unique dataset comprises various actors and the commands they have executed, with a significant proportion using the Cobalt Strike framework in August 2020-October 2022. We implemented a hybrid deep learning structure combining transformers and convolutional neural networks to benefit global and local contextual information within the sequence of commands, which provides a detailed view of the behavioral patterns of threat actors. We evaluated our hybrid architecture against pre-trained transformer-based models such as BERT, RoBERTa, SecureBERT, and DarkBERT with our high-count, medium-count, and low-count datasets. Hybrid architecture has achieved F1-score of 95.11% and an accuracy score of 95.13% on the high-count dataset, F1-score of 93.60% and accuracy score of 93.77% on the medium-count dataset, and F1-score of 88.95% and accuracy score of 89.25% on the low-count dataset. Our approach has the potential to substantially reduce the workload of incident response experts who are processing the collected cybersecurity data to identify patterns.

```
@article{10.1145/3676284,
author = {B\"{o}ge, Emirhan and Ertan, Murat Bilgehan and Alptekin, Halit and \c{C}etin, Or\c{c}un},
title = {Unveiling Cyber Threat Actors: A Hybrid Deep Learning Approach for Behavior-based Attribution},
year = {2024},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3676284},
doi = {10.1145/3676284},
abstract = {In this paper, we leverage natural language processing and machine learning algorithms to profile threat actors based on their behavioral signatures to establish identification for soft attribution. Our unique dataset comprises various actors and the commands they have executed, with a significant proportion using the Cobalt Strike framework in August 2020-October 2022. We implemented a hybrid deep learning structure combining transformers and convolutional neural networks to benefit global and local contextual information within the sequence of commands, which provides a detailed view of the behavioral patterns of threat actors. We evaluated our hybrid architecture against pre-trained transformer-based models such as BERT, RoBERTa, SecureBERT, and DarkBERT with our high-count, medium-count, and low-count datasets. Hybrid architecture has achieved F1-score of 95.11\% and an accuracy score of 95.13\% on the high-count dataset, F1-score of 93.60\% and accuracy score of 93.77\% on the medium-count dataset, and F1-score of 88.95\% and accuracy score of 89.25\% on the low-count dataset. Our approach has the potential to substantially reduce the workload of incident response experts who are processing the collected cybersecurity data to identify patterns.},
note = {Just Accepted},
journal = {Digital Threats},
month = {jul},
keywords = {digital forensics, threat intelligence, machine learning, threat actor attribution, deep learning, natural language processing}
}
```
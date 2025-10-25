---
title: "A Biologically Inspired Filter Significance Assessment Method for Model Explanation"
collection: publications
permalink: /publication/2025-bio-inspired-filter-significance
excerpt: 'Proposed a biologically inspired method for assessing convolutional filter significance using SSVEP-based frequency tagging to enhance model interpretability in CNNs.'
date: 2025-07-09
venue: 'World Conference on Explainable Artificial Intelligence (xAI 2025)'
paperurl: 'https://link.springer.com/chapter/10.1007/978-3-031-XXXXX-X_XX'
---

The interpretability of deep learning models remains a significant challenge, particularly in convolutional neural networks (CNNs) where understanding the contributions of individual filters is crucial for explainability. In this work, we propose a biologically inspired filter significance assessment method based on Steady-State Visually Evoked Potentials (SSVEPs), a well-established neuroscience principle. Our approach leverages frequency tagging techniques to quantify the importance of convolutional filters by analyzing their frequency-locked responses to periodic contrast modulations in input images. By blending SSVEP-based filter selection into Class Activation Mapping (CAM) frameworks such as Grad-CAM, Grad-CAM++, EigenCAM, and LayerCAM, we enhance model interpretability while reducing attribution noise. Experimental evaluations on ImageNet using VGG-16, ResNet-50, and ResNeXt-50 demonstrate that SSVEP-enhanced CAM methods improve spatial focus in visual explanations, yielding higher energy concentration while maintaining competitive localization accuracy. These findings suggest that our biologically inspired approach offers a robust mechanism for identifying key filters in CNNs, paving the way for more interpretable and transparent deep learning models.


```
@inproceedings{10.1007/978-3-032-08324-1_19,
	abstract = {The interpretability of deep learning models remains a significant challenge, particularly in convolutional neural networks (CNNs) where understanding the contributions of individual filters is crucial for explainability. In this work, we propose a biologically inspired filter significance assessment method based on Steady-State Visually Evoked Potentials (SSVEPs), a well-established neuroscience principle. Our approach leverages frequency tagging techniques to quantify the importance of convolutional filters by analyzing their frequency-locked responses to periodic contrast modulations in input images. By blending SSVEP-based filter selection into Class Activation Mapping (CAM) frameworks such as Grad-CAM, Grad-CAM++, EigenCAM, and LayerCAM, we enhance model interpretability while reducing attribution noise. Experimental evaluations on ImageNet using VGG-16, ResNet-50, and ResNeXt-50 demonstrate that SSVEP-enhanced CAM methods improve spatial focus in visual explanations, yielding higher energy concentration while maintaining competitive localization accuracy. These findings suggest that our biologically inspired approach offers a robust mechanism for identifying key filters in CNNs, paving the way for more interpretable and transparent deep learning models.},
	address = {Cham},
	author = {B{\"o}ge, Emirhan and Gunindi, Yasemin and Ertan, Murat Bilgehan and Aptoula, Erchan and Alp, Nihan and Ozkan, Huseyin},
	booktitle = {Explainable Artificial Intelligence},
	editor = {Guidotti, Riccardo and Schmid, Ute and Longo, Luca},
	isbn = {978-3-032-08324-1},
	pages = {422--435},
	publisher = {Springer Nature Switzerland},
	title = {A Biologically Inspired Filter Significance Assessment Method for Model Explanation},
	year = {2026}}

```
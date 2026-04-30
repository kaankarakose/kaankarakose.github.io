---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

## Education

- **Ph.D** in Computer Science *(expected 2026)*
- **M.S.** in Computer Engineering
- **B.S.** in Electrical Engineering

---

## Experience

**AI/ML Researcher** *(2022 – Present)*

- Built and deployed a modular multi-camera AI framework for automated behavioral analysis in clinical ASD assessments — detecting behavioral timing markers with 95.5% accuracy in controlled settings
- Fine-tuned and deployed production-grade vision models including SAM-2, YOLOWorld, and Llama 2; applied LoRA for efficient adaptation of large models under compute constraints
- Designed end-to-end data pipelines covering collection, cleaning, preprocessing, and keypoint engineering for multi-site clinical video datasets
- Developed object detection, segmentation, and tracking systems using both local and global feature descriptors

**Research Assistant** *(2019 – 2022)*

- Optimized PRNU grid-search algorithm for forensic image processing, improving both accuracy and runtime
- Researched and implemented AI methods across computer vision and signal processing domains

---

## Skills

**Core:** Python, PyTorch, TensorFlow, Scikit-Learn, C#

**Computer Vision:** OpenCV, Pillow, object detection, segmentation, tracking, pose estimation

**Data & Visualization:** NumPy, Pandas, Matplotlib, Seaborn, Plotly, TensorBoard

**Infrastructure:** Docker, Apptainer, Linux, Bash, Git, Anaconda

---

## Publications

<ul>{% for post in site.publications %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>

---

## Teaching

<ul>{% for post in site.teaching %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>
  

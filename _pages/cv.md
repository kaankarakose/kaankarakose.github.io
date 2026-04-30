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

- **Ph.D** in Computer Science *(never had)*
- **M.S.** in Computer Engineering
- **B.S.** in Electrical Engineering

---

## Experience

**Engineer** *(current)*

- Assessing and ranking risk across use cases through structured technical
  validation and professional judgment
- Automating validation workflows to reduce manual overhead and increase
  consistency across assessments

**AI/ML Researcher** *(2022 – 2026)*

- Built a modular multi-camera framework for behavioral analysis in clinical
  ASD assessments — advancing automated detection of behavioral timing markers
- Fine-tuned and deployed production-grade vision models; applied
  parameter-efficient adaptation techniques under real compute constraints
- Designed end-to-end data pipelines for multi-site clinical video datasets

**Research Assistant** *(2019 – 2022)*

- Researched digital image forensics methods for source verification
  and authenticity analysis
- Investigated and implemented learning strategy methods for model training

---

## Skills

**Core:** Python, PyTorch, TensorFlow, Scikit-Learn, C#

**Computer Vision:** OpenCV, Pillow, object detection, segmentation,
tracking, pose estimation

**Data & Visualization:** NumPy, Pandas, Matplotlib, Seaborn, Plotly,
TensorBoard

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

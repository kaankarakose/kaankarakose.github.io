---
title: "A new strategy for curriculum learning using model distillation"
collection: publications
permalink: /publication/2020-09-30-a-new-strategy-for-curriculum-learning-using-model-distillation
excerpt: 'This study introduces an innovative curriculum learning strategy for deep neural networks, inspired by human and animal learning patterns. By leveraging transfer learning with a pre-trained Xception model on ImageNet and implementing a novel sample sorting methodology, we demonstrate improved training efficiency on CIFAR-10 and CIFAR-100 datasets. Our approach consistently achieves over 1% higher accuracy per epoch compared to random training, highlighting the benefits of structured learning progression in neural network training.'
date: 2020-09-30
venue: 'Global Journal of Computer Sciences: Theory and Research'
paperurl: 'https://un-pub.eu/ojs/index.php/gjcs/article/view/5810'
citation: 'K. Karakose and M. Bilgin (2020). &quot;“A new strategy for curriculum learning using model distillation”.&quot; <i>Global Journal of Computer Sciences: Theory and Research</i>.'
---
In recent years, deep neural networks have been successful in both industry and academia, especially for computer vision tasks. Humans and animals learn much better when gradually presented in a meaningful order showing more concepts and complex samples rather than randomly presenting the information. The use of such training strategies in the context of artificial neural networks is called curriculum learning. In this study, a strategy was developed for curriculum learning. Using the CIFAR-10 and CIFAR-100 training sets, the last few layers of the pre-trained on ImageNet Xception model were trained to keep the training set knowledge in the model’s weight. Finally, a much smaller model was trained with the sample sorting methods presented using these difficulty levels. The findings obtained in this study show that the accuracy value generated when trained by the method we provided with the accuracy value trained with randomly mixed data was more than 1% for each epoch.

[Download paper here](https://un-pub.eu/ojs/index.php/gjcs/article/view/5810)

<!-- Recommended citation: K. Karakose and M. . Bilgin, “A new strategy for curriculum learning using model distillation”, GJCS, vol. 10, no. 2, pp. 57–65, Oct. 2020. <i>Global Journal of Computer Sciences: Theory and Research</i>. 1(1). -->
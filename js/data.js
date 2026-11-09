/* Projects for the Work section: one object per card */

const projects = [
  {
    name: 'NightCompass',
    summary: 'Night-time obstacle detection for blind pedestrians, using separately trained thermal and RGB YOLOv8 detectors.',
    image: 'assets/projects/nightcompass.webp',
    imageAlt: 'NightCompass app detecting pedestrians in a night-time video frame',
    highlights: [
      'Fine-tuned on 10,700+ FLIR thermal frames across 9 classes: 0.77 mAP50 on pedestrians in validation, 0.73 on a 3,749-frame held-out test set.',
      'Thermal beats RGB on pedestrians (0.73 vs 0.44 mAP50) at about 2 ms per frame.',
      'Both models served through a FastAPI backend with live video streaming.'
    ],
    tags: ['Python', 'PyTorch', 'YOLOv8', 'OpenCV', 'FastAPI'],
    links: [
      { label: 'Live', url: 'https://nightcompass-132701192647.us-central1.run.app/' }
    ]
  },
  {
    name: 'Find Your Next Obsession',
    summary: 'Video game recommender over a 50,000-game Steam catalogue.',
    image: 'assets/projects/find-your-next-obsession.webp',
    imageAlt: 'Find Your Next Obsession showing game recommendations for a search',
    highlights: [
      'TF-IDF and cosine similarity, ranked by a weighted tag score plus a popularity signal.',
      'RapidFuzz fuzzy matching and alias normalisation, so partial or informal titles still resolve; user mood mapped to dataset tags.',
      'Grew from a rule-based CLI into a FastAPI backend with a Jinja2 frontend, deployed on cloud.'
    ],
    tags: ['Python', 'Pandas', 'Scikit-learn', 'FastAPI'],
    links: [
      { label: 'Live', url: 'https://game-recommender-132701192647.us-central1.run.app/' }
    ]
  },
  {
    name: 'Cricket Shot Classifier',
    summary: 'Image classifier that identifies four batting shots.',
    image: 'assets/projects/cricket-shot-classifier.webp',
    imageAlt: 'Cricket Shot Classifier web UI showing a predicted batting shot',
    highlights: [
      'Two-phase MobileNetV2 transfer learning, 94.21% test accuracy.',
      'Trained on 4,723 images with in-graph augmentation; fine-tuning the top 30% of the base lifted validation accuracy from 83% to 95%.',
      'Confusion-matrix analysis to find the shot pairs the model mixes up; served with FastAPI and a responsive web UI.'
    ],
    tags: ['Python', 'TensorFlow', 'MobileNetV2', 'FastAPI'],
    links: [
      { label: 'Live', url: 'https://cricket-shot-detector-132701192647.us-central1.run.app/' }
    ]
  }
];

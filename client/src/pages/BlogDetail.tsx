import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import todoImage from "../assets/todo.jpeg";
import blinkitImage from "../assets/blinkit.png";
import appleSite from "../assets/apple.jpeg";
import langChain from "../assets/langchain.png";
import ml1 from "../assets/ml1.jpg";
import ml2 from "../assets/ml2.png";

const blogContent: Record<string, any> = {

  "1": {
    "title": "Building an Offline-First Task Manager with Flutter and Node.js",
    "date": "December 2, 2025",
    "readTime": "12 min read",
    "image": todoImage,
    "content": [
      {
        "type": "text",
        "value": "In this project, I built an offline-first Task Manager application using Flutter for the frontend and Node.js with Express and TypeScript for the backend. My app supports user authentication, task management, and automatic data synchronization between local SQLite and remote PostgreSQL databases, ensuring seamless functionality even when offline."
      },
      {
        "type": "heading",
        "value": "Frontend Implementation with Flutter"
      },
      {
        "type": "text",
        "value": "For the Flutter frontend, I created authentication pages (sign-up and login), a homepage for task management, and an add task page with a color picker. I chose Bloc Cubit for state management to ensure a smooth user experience. I implemented Shared Preferences for offline token persistence, while SQLite provided local storage for tasks. I designed the UI with form validation and global theming for a consistent look and feel. I set up navigation between authentication, homepage, and add task pages, allowing users to seamlessly move between screens."
      },
      {
        "type": "heading",
        "value": "Backend Setup with Node.js and PostgreSQL"
      },
      {
        "type": "text",
        "value": "I built the backend with Node.js, Express, and TypeScript, using Drizzle ORM for database abstraction. I chose PostgreSQL as the remote database and used Docker for containerization to ensure a consistent development environment. I exposed REST APIs for user authentication and task management, including endpoints for sign-up, login, and token validation. I implemented JWT-based authentication to secure routes and used bcrypt for password hashing."
      },
      {
        "type": "heading",
        "value": "Offline-First Data Synchronization"
      },
      {
        "type": "text",
        "value": "I employed an offline-first approach where tasks created offline are saved in SQLite with an isSynced flag. When connectivity is restored, the app automatically syncs unsynced tasks to the remote PostgreSQL database. I implemented connectivity monitoring to ensure data consistency and reliability. This approach allows users to continue working on tasks even without an internet connection, with changes syncing automatically once the device is back online."
      },
      {
        "type": "heading",
        "value": "Docker and Development Environment"
      },
      {
        "type": "text",
        "value": "I used Docker to containerize the backend and PostgreSQL database, ensuring dependency isolation and easy deployment. I set up Docker Compose to orchestrate multiple services, with volume mounts for persistent data storage. I kept the frontend Flutter code non-dockerized to allow for flexible development workflows. This setup simplified my backend environment management and ensured consistency across different development and production environments."
      },
      {
        "type": "text",
        "value": "My implementation demonstrates a robust, scalable offline-first task management application, leveraging modern Flutter and Node.js ecosystems for real-time data sync, secure authentication, and a clean architecture. The app's design ensures a seamless user experience, whether online or offline, making it suitable for real-world use cases."
      }
    ]
  },
  "2": {
    "title": "Building an Apple MacBook Pro Landing Page Clone",
    "date": "December 2, 2025",
    "readTime": "12 min read",
    "image": appleSite,
    "content": [
      {
        "type": "text",
        "value": "In this project, I built a premium Apple MacBook Pro landing page clone, replicating Apple's signature immersive web experience. My landing page features cinematic animations, interactive 3D product models, and scroll-synchronized effects, all designed to emotionally engage users and showcase the product's capabilities."
      },
      {
        "type": "heading",
        "value": "Project Overview and Key Features"
      },
      {
        "type": "text",
        "value": "I created a landing page with a cinematic hero section, interactive 3D MacBook models, parallax masked video effects, and scroll-triggered animations."
      },
      {
        "type": "heading",
        "value": "UI Components and Git Workflow"
      },
      {
        "type": "text",
        "value": "I built the navbar component using semantic HTML5 tags and dynamically generated nav links, ensuring clean code separation. I applied responsive design principles, with full nav links on desktop and simplified icon-only nav on mobile. I followed a structured Git and GitHub workflow, making regular commits with clean commit messages to demonstrate genuine project development."
      },
      {
        "type": "heading",
        "value": "Hero Section and Code Quality"
      },
      {
        "type": "text",
        "value": "For the hero section, I featured an animated MacBook opening video, integrated via HTML5 video elements with autoplay and muted properties. I styled the primary Call-To-Action (CTA) button and pricing text to match Apple's design. I used React hooks to control video playback speed and employed AI-powered code review tools to ensure high code quality and best practices."
      },
      {
        "type": "heading",
        "value": "Interactive 3D Product Viewer"
      },
      {
        "type": "text",
        "value": "I created a product viewer component showcasing a 3D model of the MacBook, with headline, product info, and control panels for color and size selection. I used Zustand for global state management, allowing dynamic updates to the model's appearance. I rendered the 3D model using React Three Fiber and 3JS, with camera and orbit controls for user interaction. I configured studio lighting to enhance the model's realism, simulating Apple's product photography look."
      },
      {
        "type": "heading",
        "value": "Animating Model Transitions"
      },
      {
        "type": "text",
        "value": "I implemented GSAP and GSAP ScrollTrigger to create scroll-based animations and transitions. I built a model switcher component to handle toggling between different MacBook models, animating fade-in/out and horizontal sliding effects. I added presentation controls allowing for 3D rotation with snap-back physics and angle limits. I linked the global store state to the 3D model properties, enabling dynamic color changes and selective material application."
      },
      {
        "type": "heading",
        "value": "Video Showcase Section"
      },
      {
        "type": "text",
        "value": "For the showcase section, I created a fullscreen background video demonstrating the MacBook's capabilities, with an SVG mask overlay and animated scaling effect on scroll. I styled content blocks with headings, paragraphs, and call-to-action buttons to match Apple's design. I disabled scroll-triggered animations on tablets and mobile, replacing them with immediate effects for better user experience. I applied responsive design principles with conditional logic for device width."
      },
      {
        "type": "heading",
        "value": "Performance, Features, Highlights, and Footer"
      },
      {
        "type": "text",
        "value": "In the performance section, I displayed multiple images with individual animation positions, text fading in and moving up on scroll. For the features section, I showcased a rotating MacBook 3D model with video textures on its screen, synchronized with feature descriptions and icons. I implemented a masonry layout with scroll-triggered fade-in animations for cards in the highlights section. For the footer, I used semantic HTML5 tags, info, logo, copyright, and navigational links, with dynamic mapping for accessibility."
      },
      {
        "type": "text",
        "value": "Throughout this project, I focused on animation craftsmanship, 3D modeling, state management, responsive design, code quality, and deployment best practices to create a high-fidelity Apple MacBook Pro landing page clone."
      }
    ]
  },
  "3": {
    "title": "Building a BlinkIt UI Clone with Flutter",
    "date": "December 2, 2025",
    "readTime": "12 min read",
    "image": blinkitImage,
    "content": [
      {
        "type": "text",
        "value": "In this project, I built a BlinkIt-like grocery app UI using Flutter. My goal was to replicate the look and feel of the original BlinkIt app, focusing on creating a seamless and intuitive user experience for both Android and iOS platforms using a single codebase."
      },
      {
        "type": "heading",
        "value": "Project Setup and Folder Architecture"
      },
      {
        "type": "text",
        "value": "I started by setting up a new Flutter project and organizing the folder structure for maintainability. I divided the architecture into three main directories: data, domain, and repository. I reserved the data directory for future API calls and dynamic functions, the domain directory for constants like colors, themes, and shared preferences, and the repository directory for UI widgets and screens. This separation of concerns ensured clean and scalable code."
      },
      {
        "type": "heading",
        "value": "Domain Setup: Colors, Assets, and Fonts"
      },
      {
        "type": "text",
        "value": "I set up the domain directory with a Colors class to centralize color constants, making it easy to manage themes. I exported assets such as images and fonts from Figma and added them to the project. I used the Poppins font family for both bold and regular weights, declaring it in the pubspec.yaml file. I created the splash screen as a stateful widget with a yellow background and the BlinkIt logo, using a timer to navigate to the login screen after a brief delay."
      },
      {
        "type": "heading",
        "value": "Login UI Construction and Button Design"
      },
      {
        "type": "text",
        "value": "I constructed the login screen with centered images and custom text widgets for titles and labels. I created a button with text and icon using a Row widget inside an ElevatedButton, styled with a red color, rounded corners, and proper elevation. I exported images for login options and added them, managing spacing between elements using SizedBox widgets. I built custom text widgets supporting parameters for text, color, font weight, font family, and size, ensuring consistent styling across the app."
      },
      {
        "type": "heading",
        "value": "Bottom Navigation Bar and Screen Setup"
      },
      {
        "type": "text",
        "value": "I implemented the bottom navigation bar with icons for Home, Cart, Category, and Print screens. I created each screen as a separate directory with stateless widgets. I implemented navigation logic with setState on the onTap event of bottom navigation items, updating the displayed screen based on the current index. I made UI adjustments for proper icon alignment and label display, ensuring a smooth user experience."
      },
      {
        "type": "heading",
        "value": "Category Screen Construction with Lists and Arrays"
      },
      {
        "type": "text",
        "value": "I created the category screen UI by copying the app bar and search field from the Cart screen for consistency. I used arrays of category data (images and names) to populate the screen. I implemented ListView.builder combined with Container widgets for category cards, which have fixed height, width, border radius, and background color. I enabled horizontal scrolling for a smooth browsing experience and managed proper padding and spacing using Padding and SizedBox widgets. Each category card shows an image and label below it, with multiple categories like Vegetables & Fruits, Dairy, Bread & Milk, and Biscuits added."
      },
      {
        "type": "heading",
        "value": "Snack & Drinks, Household Essentials, Cart Screen & App Bar"
      },
      {
        "type": "text",
        "value": "I created the Snack & Drinks and Household Essentials sections similarly with arrays and horizontal lists. I carefully handled flex values and padding to avoid UI overflow errors. I built the cart screen with an app bar designed using a Container with fixed height and full width. I used a Row for layout with left-aligned text and right-aligned user icon. I added the user icon as a CircleAvatar positioned using Stack and Positioned widgets. I created the search text field as a reusable widget with a text editing controller, prefix and suffix icons, and custom border styling with rounded corners. I added images for cart and search icons as assets and made UI components reusable with helper widgets for custom text, buttons, and images."
      },
      {
        "type": "heading",
        "value": "Print Screen, Home Screen & Final UI Assembly"
      },
      {
        "type": "text",
        "value": "I created the Print screen similar to the Cart screen with an app bar, texts for titles like Print Store and Blink It in short secure prints at every stage, and a container with rounded corners and background color. I added various icons and images to the print screen with proper padding and alignment. I built the home screen with a red app bar, containers, and dividers to visually separate components. I added texts and images for deals, offers, and categories. I used Stack, Row, and Column widgets extensively for overlay and layout. I implemented multiple categories like Mega Diwali Sale, Crackers, Grocery & Kitchen with horizontal scrolling lists. I styled UI elements consistently using centralized colors, fonts, and reusable components. I addressed exception and layout issues by using proper widgets like Expanded, Padding, and SizedBox."
      },
      {
        "type": "heading",
        "value": "Final Thoughts"
      },
      {
        "type": "text",
        "value": "This project provided me with comprehensive experience in building the UI of a BlinkIt-like grocery app, covering project setup, folder architecture, asset management, building reusable widgets, navigation, and complex UI layouts in detail. The source code is available on my GitHub, and I'm happy to discuss any aspects of the implementation in more detail."
      }
    ]
  },
  "4": {
    "title": "Building a LangChain and Flask Application with Tailwind CSS",
    "date": "December 2, 2025",
    "readTime": "12 min read",
    "image": langChain,
    "content": [
      {
        "type": "text",
        "value": "In this project, I built a real-world content generator application using LangChain, Flask, and Tailwind CSS. I designed the app to generate dynamic content based on user input, leveraging the power of Large Language Models (LLMs) and modern web development tools."
      },
      {
        "type": "heading",
        "value": "Setting Up the Project Environment"
      },
      {
        "type": "text",
        "value": "I set up the project on a cloud IDE platform like Rappal, which provided a convenient environment for development. I started by building a minimal Flask app as the backbone for the application, which would serve as the foundation for the more complex features I planned to add later."
      },
      {
        "type": "code",
        "value": "from flask import Flask, render_template, request, jsonify\n\napp = Flask(__name__)\n\n@app.route('/')\ndef home():\n    return render_template('index.html')\n\nif __name__ == '__main__':\n    app.run(host='0.0.0.0', port=8080)"
      },
      {
        "type": "heading",
        "value": "Integrating Tailwind CSS with Flask"
      },
      {
        "type": "text",
        "value": "For styling the frontend, I chose Tailwind CSS for its utility-first approach. I ran npm commands to install Node.js and Tailwind CSS dependencies. I created necessary folders: static for CSS and templates for HTML. Inside the static folder, I set up subfolders for source CSS files and compiled output. I configured Tailwind configuration files to watch source CSS files and output compiled CSS automatically, enabling live updating of CSS styles during development."
      },
      {
        "type": "heading",
        "value": "Implementing Form Submission and Flask Backend Handling"
      },
      {
        "type": "text",
        "value": "I wrote JavaScript functions to capture the prompt input from the user and submit it via a POST request to the Flask backend. I configured the Flask backend to accept POST requests, extract prompt data, and respond with generated content. During development, I went through debugging steps, including logging incoming requests and fixing issues related to fetch API and request parsing. I set up Flask to return a JSON response that is injected into the frontend dynamically, emphasizing the use of Flask's template rendering and API handling for a smooth user experience."
      },
      {
        "type": "code",
        "value": "@app.route('/generate', methods=['POST'])\ndef generate_content():\n    data = request.get_json()\n    prompt = data['prompt']\n    # Call LangChain/OpenAI API to generate content\n    response = {'generated_text': 'Sample generated text'}\n    return jsonify(response)"
      },
      {
        "type": "heading",
        "value": "LangChain Integration and OpenAI API Setup"
      },
      {
        "type": "text",
        "value": "I integrated LangChain and OpenAI API for content generation. I imported necessary LangChain components, set up API keys securely using environment variables, and configured LangChain generation parameters such as temperature. I addressed common issues like API authentication and request formatting. I used OpenAI's chat or completion models for generating content, making sure to secure API keys properly."
      },
      {
        "type": "code",
        "value": "from langchain.llms import OpenAI\nimport os\n\nllm = OpenAI(api_key=os.getenv('OPENAI_API_KEY'), temperature=0.3)\n\ndef generate_response(prompt):\n    return llm(prompt)"
      },
      {
        "type": "heading",
        "value": "Finalizing Deployment and Testing"
      },
      {
        "type": "text",
        "value": "I completed the deployment process on the cloud IDE, which included bundling, building, pushing the app, and running it live. I tested the deployed app by submitting prompts and verifying generated output. I added loading animations and improved UI responsiveness to enhance the user experience. I also polished frontend styling and responsiveness to ensure the application looked professional and worked well on different devices."
      },
      {
        "type": "heading",
        "value": "Conclusion and Learnings"
      },
      {
        "type": "text",
        "value": "This project allowed me to build a content generator app with LangChain, Flask, and Tailwind, deployed on a cloud IDE. Through this hands-on development, I gained valuable experience in integrating AI APIs with web applications and creating responsive, user-friendly interfaces. The project demonstrates how modern AI capabilities can be harnessed in practical web applications to generate dynamic content based on user input."
      }
    ]
  },
  "5": {
    "title": "Face Mask Detection with CNN: Detailed Implementation Guide",
    "date": "December 2, 2025",
    "readTime": "12 min read",
    "image": ml1,
    "content": [
      {
        "type": "text",
        "value": "In this project, I implemented a Face Mask Detection system using Convolutional Neural Networks (CNN). I'll walk you through my entire process from data acquisition to model deployment, including the code I wrote and the workflow I followed."
      },
      {
        "type": "heading",
        "value": "Step 1: Environment Setup"
      },
      {
        "type": "text",
        "value": "I chose Google Colab for its GPU support, which significantly speeds up training. I installed and imported key libraries including TensorFlow/Keras, OpenCV, Matplotlib, NumPy, and Pillow."
      },
      {
        "type": "code",
        "value": "!pip install kaggle\n\nimport os\nimport numpy as np\nimport pandas as pd\nimport matplotlib.pyplot as plt\nimport cv2\nfrom PIL import Image\nfrom google.colab.patches import cv2_imshow\nfrom sklearn.model_selection import train_test_split"
      },
      {
        "type": "text",
        "value": "I used the Kaggle API to download the dataset. This required setting up a Kaggle account and API token (kaggle.json) for access."
      },
      {
        "type": "code",
        "value": "# Upload kaggle.json and configure\nos.makedirs('/root/.kaggle', exist_ok=True)\n# Upload kaggle.json file to Colab files\n\n# Download dataset\n!kaggle datasets download -d aayushmishra1605/face-mask-detection-dataset\n!unzip face-mask-detection-dataset.zip"
      },
      {
        "type": "heading",
        "value": "Step 2: Data Exploration"
      },
      {
        "type": "text",
        "value": "I found that the dataset was organized into two folders: 'with_mask' and 'without_mask'. I used os.listdir() to load filenames and check the distribution of images in each category."
      },
      {
        "type": "code",
        "value": "with_mask_path = 'data/with_mask/'\nwithout_mask_path = 'data/without_mask/'\n\nwith_mask_files = os.listdir(with_mask_path)\nwithout_mask_files = os.listdir(without_mask_path)\n\nprint(f'With mask: {len(with_mask_files)}')\nprint(f'Without mask: {len(without_mask_files)}')"
      },
      {
        "type": "heading",
        "value": "Step 3: Image Preprocessing"
      },
      {
        "type": "text",
        "value": "I resized all images to 128x128 pixels, converted them to RGB, and stored them as NumPy arrays. This ensured uniform input for the CNN."
      },
      {
        "type": "code",
        "value": "data = []\nlabels = []\n\n# Process with_mask images\nfor image_file in with_mask_files:\n    image = Image.open(with_mask_path + image_file)\n    image = image.resize((128, 128))\n    image = image.convert('RGB')\n    image = np.array(image)\n    data.append(image)\n    labels.append(1)\n\n# Process without_mask images\nfor image_file in without_mask_files:\n    image = Image.open(without_mask_path + image_file)\n    image = image.resize((128, 128))\n    image = image.convert('RGB')\n    image = np.array(image)\n    data.append(image)\n    labels.append(0)"
      },
      {
        "type": "heading",
        "value": "Step 4: Data Splitting and Scaling"
      },
      {
        "type": "text",
        "value": "I split the dataset into training (80%) and testing (20%) sets. I scaled the images to the range [0, 1] for better model convergence."
      },
      {
        "type": "code",
        "value": "X = np.array(data)\ny = np.array(labels)\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=2)\n\nX_train_scaled = X_train / 255.0\nX_test_scaled = X_test / 255.0"
      },
      {
        "type": "heading",
        "value": "Step 5: CNN Model Architecture"
      },
      {
        "type": "text",
        "value": "I designed a CNN architecture that includes convolutional layers for feature extraction, max pooling for dimensionality reduction, and dense layers for classification. I added dropout layers to prevent overfitting."
      },
      {
        "type": "code",
        "value": "from tensorflow.keras import Sequential\nfrom tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout\n\nmodel = Sequential([\n    Conv2D(32, (3, 3), activation='relu', input_shape=(128, 128, 3)),\n    MaxPooling2D((2, 2)),\n    Conv2D(64, (3, 3), activation='relu'),\n    MaxPooling2D((2, 2)),\n    Flatten(),\n    Dense(128, activation='relu'),\n    Dropout(0.5),\n    Dense(64, activation='relu'),\n    Dropout(0.5),\n    Dense(2, activation='sigmoid')\n])\n\nmodel.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])"
      },
      {
        "type": "heading",
        "value": "Step 6: Model Training and Evaluation"
      },
      {
        "type": "text",
        "value": "I trained the model for 5 epochs with a validation split. Evaluation on the test set gave me an accuracy of about 92%."
      },
      {
        "type": "code",
        "value": "history = model.fit(X_train_scaled, y_train, validation_split=0.1, epochs=5, verbose=1)\nloss, accuracy = model.evaluate(X_test_scaled, y_test)\nprint(f'Test Accuracy: {accuracy:.2%}')"
      },
      {
        "type": "heading",
        "value": "Step 7: Predictive System"
      },
      {
        "type": "text",
        "value": "I created a system where the trained model can predict whether a person is wearing a mask in a new image. I preprocess the input image and pass it through the model to get the prediction."
      },
      {
        "type": "code",
        "value": "input_image = cv2.imread('path/to/image.jpg')\ninput_image_resized = cv2.resize(input_image, (128, 128))\ninput_image_scaled = input_image_resized / 255.0\ninput_image_reshaped = np.reshape(input_image_scaled, (1, 128, 128, 3))\n\nprediction = model.predict(input_image_reshaped)\nprediction_label = np.argmax(prediction)\n\nif prediction_label == 1:\n    print('Person is wearing a mask')\nelse:\n    print('Person is not wearing a mask')"
      },
      {
        "type": "text",
        "value": "My implementation covers every step from data acquisition to real-time prediction, providing a comprehensive solution for Face Mask Detection. The model achieves high accuracy and can be deployed in real-world scenarios to help enforce mask-wearing policies."
      }
    ]
  },
  "6": {
    "title": "Building a Neural Network for Breast Cancer Classification with PyTorch",
    "date": "December 2, 2025",
    "readTime": "12 min read",
    "image": ml2,
    "content": [
      {
        "type": "text",
        "value": "In this project, I built a neural network for breast cancer classification using PyTorch. I focused on implementing neural networks specifically in PyTorch, highlighting its flexibility and ease of use for deep learning tasks."
      },
      {
        "type": "heading",
        "value": "Introduction & Deep Learning Frameworks Overview"
      },
      {
        "type": "text",
        "value": "I chose to build a neural network using PyTorch for the breast cancer dataset classification. Although I had previously used this dataset with other models, my focus here was on implementing neural networks specifically in PyTorch. Before diving into the code, I considered popular deep learning frameworks: TensorFlow, PyTorch, and Keras. I chose PyTorch because it uses dynamic computational graphs, making it more flexible and easier to debug compared to TensorFlow's static computational graphs. While Keras is beginner-friendly, I found it limiting for custom training loops and complex architectures."
      },
      {
        "type": "heading",
        "value": "Setting Up Environment & Device Configuration"
      },
      {
        "type": "text",
        "value": "I used Google Colab as my coding environment, setting the runtime hardware accelerator to GPU (T4 GPU) to speed up training. I imported necessary libraries, including torch, torch.nn, torch.optim, sklearn.datasets, sklearn.model_selection.train_test_split, and sklearn.preprocessing.StandardScaler. I implemented explicit device configuration in PyTorch to ensure tensors and models are moved to GPU if available, with fallback to CPU."
      },
      {
        "type": "code",
        "value": "import torch\nimport torch.nn as nn\nimport torch.optim as optim\nfrom sklearn.datasets import load_breast_cancer\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\n\ndevice = torch.device('cuda' if torch.cuda.is_available() else 'cpu')"
      },
      {
        "type": "heading",
        "value": "Neural Network Architecture Definition in PyTorch"
      },
      {
        "type": "text",
        "value": "I defined a simple fully connected artificial neural network using PyTorch's nn.Module class. I created a custom class NeuralNet that inherits from nn.Module, with layers initialized in __init__: fc1 (first fully connected layer), relu (ReLU activation function), fc2 (second fully connected layer), and sigmoid (final activation for binary classification output). I implemented the forward pass method to specify data flow through layers and activations. I used ReLU to add non-linearity, allowing the network to learn complex relationships."
      },
      {
        "type": "code",
        "value": "class NeuralNet(nn.Module):\n    def __init__(self, input_size, hidden_size, output_size):\n        super(NeuralNet, self).__init__()\n        self.fc1 = nn.Linear(input_size, hidden_size)\n        self.relu = nn.ReLU()\n        self.fc2 = nn.Linear(hidden_size, output_size)\n        self.sigmoid = nn.Sigmoid()\n\n    def forward(self, x):\n        out = self.fc1(x)\n        out = self.relu(out)\n        out = self.fc2(out)\n        out = self.sigmoid(out)\n        return out"
      },
      {
        "type": "heading",
        "value": "Training Loop Implementation"
      },
      {
        "type": "text",
        "value": "I manually created training loops in PyTorch. For each epoch, my training loop steps included setting the model to training mode, zeroing out gradients, forward pass, loss calculation, backward pass, and optimizer step. I leveraged PyTorch's automatic calling of the forward method when calling model(input). I logged training progress every 10 epochs, calculating accuracy by rounding sigmoid outputs to 0 or 1 and comparing predictions with true labels. I used torch.no_grad() during accuracy calculation to disable gradient computation."
      },
      {
        "type": "code",
        "value": "model = NeuralNet(input_size, hidden_size, output_size)\nmodel.to(device)\n\noptimizer = optim.Adam(model.parameters(), lr=0.001)\nloss_fn = nn.BCELoss()\n\nfor epoch in range(epochs):\n    model.train()\n    optimizer.zero_grad()\n    outputs = model(X_train_tensor)\n    loss = loss_fn(outputs, y_train_tensor)\n    loss.backward()\n    optimizer.step()\n    if (epoch+1) % 10 == 0:\n        print(f'Epoch [{epoch+1}/{epochs}], Loss: {loss.item():.4f}')"
      },
      {
        "type": "heading",
        "value": "Model Evaluation"
      },
      {
        "type": "text",
        "value": "I defined an evaluation function to measure model performance on training and test datasets. I switched the model to evaluation mode to disable dropout/batchnorm updates and gradient calculations. I used torch.no_grad() to prevent gradient computation during evaluation. I passed data through the model to get outputs, which I converted to binary predictions using rounding. I calculated accuracy by comparing predictions to true labels. My results showed training accuracy around 97.3% and test accuracy around 96.4%."
      },
      {
        "type": "heading",
        "value": "Recap & Conclusion"
      },
      {
        "type": "text",
        "value": "My full pipeline included: importing dependencies and configuring device, loading and preprocessing data, defining neural network architecture, initializing model, loss function, optimizer, and hyperparameters, manually building training loop, logging training progress, and evaluating model on training and test data. This project demonstrated that knowing PyTorch or TensorFlow deeply, beyond beginner-friendly wrappers like Keras, is essential for custom, complex deep learning tasks."
      },
      {
        "type": "text",
        "value": "Through this project, I gained valuable experience in implementing neural networks with PyTorch, from architecture design to training loop implementation. The breast cancer classification task provided a practical application for demonstrating PyTorch's capabilities, and the high accuracy achieved (96.4% on the test set) validates the effectiveness of my approach. This implementation showcases how PyTorch's dynamic computational graph and intuitive API make it well-suited for developing custom deep learning solutions for real-world problems."
      }
    ]
  }
};

const BlogDetail = () => {
  const navigate = useNavigate();
  const { blogId } = useParams();
  const blog = blogContent[blogId || "1"];

  if (!blog) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
          <Button onClick={() => navigate("/blogs")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blogs
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <motion.article
        className="container mx-auto px-4 pt-32 pb-20 max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="ghost"
            onClick={() => navigate("/blogs")}
            className="mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blogs
          </Button>
        </motion.div>

        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{blog.title}</h1>

          <div className="flex items-center gap-6 text-muted-foreground">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {blog.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {blog.readTime}
            </span>
            <Button variant="ghost" size="sm" className="ml-auto">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          className="mb-12 rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[400px] object-cover"
          />
        </motion.div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {blog.content.map((section: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {section.type === "heading" && (
                <h2 className="text-3xl font-bold mt-12 mb-4">{section.value}</h2>
              )}

              {section.type === "text" && (
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {section.value}
                </p>
              )}

              {section.type === "image" && (
                <div className="my-8 rounded-lg overflow-hidden shadow-md">
                  <img
                    src={section.value}
                    alt={section.alt}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              )}

              {section.type === "code" && (
                <div className="my-8 rounded-lg bg-gray-900 p-4 overflow-x-auto">
                  <pre className="text-sm text-green-400 whitespace-pre-wrap">
                    <code>{section.value}</code>
                  </pre>
                </div>
              )}
            </motion.div>
          ))}

        </div>

        {/* Navigation Footer */}
        <motion.div
          className="mt-16 pt-8 border-t border-border flex justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button
            variant="outline"
            onClick={() => navigate("/blogs")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            All Blogs
          </Button>

          <Button variant="ghost" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share Article
          </Button>
        </motion.div>
      </motion.article>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Afshan Khan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogDetail;

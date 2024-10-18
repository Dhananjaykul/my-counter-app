# Counter App with Vite and Docker

This is a simple counter app built with React and Vite, containerized using Docker. The app allows users to increment and decrement a counter and select step sizes.

![Counter App Screenshot](./image.png)  <!-- Replace with the actual path to your image -->

## Features

- Increment and decrement counter values.
- Select step size for increments and decrements.
- Built with Vite for a fast development experience.

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine.
- Basic knowledge of React and Docker.

### Clone the Repository

```bash
git clone https://github.com/Dhananjaykul/my-counter-app.git
cd my-counter-app
```

## Building the Docker Image

To build the Docker image for this app, run the following command in the root of the project directory:

```bash
docker build -t my-counter-app .
```

## Running the App

Once the image is built, you can run the app with the following command:

```bash
docker run -p 80:80 my-counter-app
```

You can now access the app by visiting `http://localhost` in your web browser.

## CI/CD Automation with Jenkins  

This project is part of a detailed tutorial on setting up a CI/CD pipeline using Jenkins with a distributed build system. Follow the blog post below to see the complete automation journey:  

👉 **[Part 4: Deploying a Demo React Project with CI/CD Automation Using Jenkins Distributed Builds and Docker](https://medium.com/@kulkarnidhananjay89/part-4-deploying-a-demo-react-project-with-ci-cd-automation-using-jenkins-distributed-builds-and-5cacc622321f)**  

This guide covers the following steps:  

1. **Cloning the Repository:**  
   - Pulls the latest code from the GitHub repository.

2. **Building Docker Images:**  
   - Uses Docker to build images locally or on an agent node.  

3. **Pushing Docker Images to DockerHub:**  
   - Automates image upload to DockerHub using credentials binding.  

4. **Automated Builds with GitHub Webhooks:**  
   - Triggers the pipeline automatically when changes are pushed to the GitHub repository.

This setup demonstrates end-to-end automation by integrating Docker, Jenkins, and GitHub. Stay tuned for further updates, where we will explore advanced features like Kubernetes for scalability and automated scanning tools.



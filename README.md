## 📌 Project Overview
**Developer Tools Site** is a simple and lightweight static website that showcases commonly used developer tools.
This project uses **Nginx** to serve static HTML/CSS/JS files and is containerized using **Docker**.

---


## 📦 Docker Setup
1. Build Docker Image
```
docker build -t your-dockerhub-username/developer-tools-site:latest .
```
2. Run Locally
```
docker run -p 8080:80 your-dockerhub-username/developer-tools-site:latest
```

Website will be available at [http://localhost:8080](http://localhost:8080)



## ☸️ Kubernetes Deployment
1. Apply Deployment & Service
```
kubectl apply -f k8s-deployment.yml
kubectl apply -f k8s-service.yml
```
2. Verify Deployment
```
kubectl get pods
kubectl get svc
```
3. Access the Site<br>
If using **minikube**:

Access the site at:
```
http://<minikube-ip>:30080
```

Find Minikube IP using:
```
minikube ip
```

Trouble in accessing pod? Then run the below command to get URL(bypasses nodeport by creating temporary tunnel)
```
minikube service developer-tools-site-service --url
```

## 🔄 CI/CD (GitHub Actions Workflow)
This branch contains workflow that:

1. Builds Docker image

2. Pushes it to Docker Hub

3. Uses the static files inside the repo

This ensures:

- Easy updates — just commit HTML/CSS/JS

- Docker image always contains the latest site

## 🔀 Alternate Version (ConfigMap Branch)
- A separate version of this project exists in the [configmap-version ](https://github.com/SumanthMaddali/developer-tools-site/tree/configmap-version) branch.
- It stores HTML/CSS content in Kubernetes ConfigMaps instead of packaging them inside the Docker image. It’s useful when you want to update static content without rebuilding the image.
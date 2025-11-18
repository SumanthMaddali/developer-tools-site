## 📌 Project Overview

**Developer Tools Site** is a simple static website (HTML/CSS/JS) deployed on:

- Docker (NGINX)
- Kubernetes (Minikube)
- Optional CI/CD using GitHub Actions

The project demonstrates:

- Containerizing a static site  
- Serving it via NGINX  
- Using Kubernetes ConfigMaps to hot-update HTML/CSS without rebuilding images  
- Deployment & Service concepts  

---

## 📁 Project Structure

```bash
repo/
│
├── app/                           # Static site files
│   ├── index.html
│   ├── style.css
│   └── js/
│       └── base64-tool.js
│       └── json-formatter.js
│       └── url-encoder.js
│
├── Dockerfile
│
├── k8s/                           # Kubernetes manifests
│   ├── k8s-html-configmap.yaml
│   ├── k8s-deployment.yaml
│   └── k8s-service.yaml
│
└── .github/workflows/
    └── docker-image.yaml          # Optional GitHub Actions CI/CD
```

## 🚀 Overview: How the Deployment Works
The website files (HTML/CSS/JS) live inside the app/ folder.

When deployed, Kubernetes loads these files into a ConfigMap

1. The Deployment mounts this ConfigMap inside the Nginx container
2. Nginx serves them as a website
3. Update HTML/CSS files without rebuilding the Docker image

## 🧱 Kubernetes Manifests Explained

1️⃣ ConfigMap – Stores Static Website Files

The ConfigMap keeps website files so Kubernetes can mount them inside the container.
```
apiVersion: v1
kind: ConfigMap
metadata:
  name: html-config
data:
  index.html: |
    (your html content)
  style.css: |
    (your css content)
```

2️⃣ Deployment – Runs Nginx & Mounts the Website Files
```
volumeMounts:
  - name: html-config-volume
    mountPath: /usr/share/nginx/html/index.html
    subPath: index.html
  - name: html-config-volume
    mountPath: /usr/share/nginx/html/style.css
    subPath: style.css
```

3️⃣ Service – Exposes the Website
```
type: NodePort
port: 80
nodePort: 30080
```

If using minikube:
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

## 🔄 Updating the Website (Recommended Workflow)
Whenever you update `index.html` or `style.css` follow the below steps:
1. Re-apply ConfigMap
```
kubectl apply -f k8s/configmap.yaml
```

2. Restart Deployment (required for the pod to pick up changes)
```
kubectl rollout restart deployment/developer-tools-site
```

## 🐳 When You Need to Rebuild Docker Image
Only when you change:

- JS files(they are not added to configmap yet)
- The Dockerfile
- Base Nginx configuration
- Additional OS packages
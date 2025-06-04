# 📘 Git + GitHub Setup – Day 01

This document outlines all Git-related actions performed on the `fullstack-learning` project.

---

## ✅ 1. Git Initialization

```bash
# Inside the root folder (fullstack-learning), Git was initialized
git init
```

---

## ✅ 2. Staging & Committing Work

```bash
# Staged and committed all project files
git add .
git commit -m "Day 1: sum, multiply, subtract functions with reduce"
```

---

## ✅ 3. GitHub Repository Setup

- A new repository `fullstack-learning` was created on GitHub
- Repository was initialized **without a README**
- Repository is **public**

---

## ✅ 4. Linking Local Repo to GitHub (via HTTPS initially)

```bash
git remote add origin https://github.com/sau1051/fullstack-learning.git
git branch -M main
git push -u origin main
```

---

## ⚠️ 5. GitHub Authentication Issue (HTTPS)

- GitHub blocked password-based authentication
- A **Personal Access Token (PAT)** was generated manually
- Used in place of a password when pushing code

---

## ✅ 6. Temporary Credential Caching (for 30 days)

```bash
# Cache credentials for 30 days (2592000 seconds)
git config --global credential.helper 'cache --timeout=2592000'
```

---

## ✅ 7. Switched to SSH (for long-term secure authentication)

### 🔹 a. SSH Key Generation

```bash
# Generated an RSA SSH key with 4096-bit encryption
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

Files created:
- `~/.ssh/id_rsa` (private key — DO NOT SHARE)
- `~/.ssh/id_rsa.pub` (public key — safe to upload to GitHub)

---

### 🔹 b. SSH Public Key Added to GitHub

- Navigated to [https://github.com/settings/keys](https://github.com/settings/keys)
- Clicked “New SSH key”
- Gave it a name like `My Laptop - id_rsa`
- Pasted the contents of `id_rsa.pub`

---

### 🔹 c. Switched Git Remote URL to SSH

```bash
git remote set-url origin git@github.com:sau1051/fullstack-learning.git
git remote -v
```

Expected output:

```
origin  git@github.com:sau1051/fullstack-learning.git (fetch)
origin  git@github.com:sau1051/fullstack-learning.git (push)
```

---

### 🔹 d. SSH over HTTPS (Port 443 fallback due to port 22 block)

Created this file: `~/.ssh/config`

```ssh
Host github.com
  Hostname ssh.github.com
  Port 443
  User git
  IdentityFile ~/.ssh/id_rsa
  IdentitiesOnly yes
```

---

### 🔹 e. Tested SSH Connection

```bash
ssh -T git@github.com
```

Expected output:

```
Hi sau1051! You've successfully authenticated, but GitHub does not provide shell access.
```

---

### 🔹 f. Added SSH Key to SSH Agent

```bash
# Start the SSH agent
Start-Service ssh-agent

# Add the private key
ssh-add $env:USERPROFILE\.ssh\id_rsa
```

Expected:
```
Identity added: C:/Users/Saurabh/.ssh/id_rsa (your_email@example.com)
```

---

## ✅ 8. Final Push Using SSH

```bash
# Now works silently without prompting for username or token
git push
```

---

## 🧼 Summary

| Step                        | Tool       | Status |
|-----------------------------|------------|--------|
| Git init                    | Git        | ✅      |
| Commit code                 | Git        | ✅      |
| Push to GitHub              | GitHub     | ✅      |
| Switched to SSH             | Git + SSH  | ✅      |
| Configured port fallback    | SSH config | ✅      |
| Passphrase-free workflow    | SSH agent  | ✅      |

---

✅ You're now fully Git + GitHub + SSH configured like a pro.

🚫 **Note:** Never commit `.ssh/id_rsa` or GitHub tokens to your public repository.


# 📘 Git + GitHub Setup – Day 02 : Branching, Merging, Conflict Handling
---

### 1. Create a New Branch
```bash
git checkout -b feature-git-advanced
```

### 2. Make Changes in `feature-git-advanced`
- Edit `README-git.md` (add these Day 2 steps)
- Save the file

### 3. Commit Changes
```bash
git add .
git commit -m "Updated Git steps for branching and merging"
```

### 4. Push the Branch to GitHub
```bash
git push origin feature-git-advanced
```

---

### (Optional) 5. Simulate a Conflict

#### a. Switch to `main` Branch
```bash
git checkout main
```

#### b. Edit the same part of `README-git.md` and save  
(Example: change a line already modified in the feature branch)

#### c. Commit the Conflict-Creating Change
```bash
git add .
git commit -m "Made conflicting change in main"
```

---

### 6. Merge the Feature Branch into Main
```bash
git merge feature-git-advanced
```

#### If a conflict occurs:
- VS Code will show conflict markers:
  ```md
  <<<<<<< HEAD
  main branch version
  =======
  feature branch version
  >>>>>>> feature-git-advanced
  ```
- Manually resolve the conflict
- Then run:
```bash
git add .
git commit -m "Resolved merge conflict"
```

---

### 7. Push Final Merged Main to GitHub
```bash
git push origin main
```

---

## 🟦 GitHub Desktop Equivalents (Day 2)

| Task                      | GitHub Desktop Action                      |
|---------------------------|--------------------------------------------|
| Create new branch         | Branch > New Branch                        |
| Switch branch             | Branch > main                              |
| Make commit               | Enter message > Click `Commit` button      |
| Push changes              | Click `Push origin` (top bar)              |
| Pull latest               | Repository > Pull                          |
| Merge branches            | Branch > Merge into Current Branch         |
| Resolve conflict          | VS Code will highlight > manually resolve |
| Commit after resolving    | Commit from GitHub Desktop as usual        |

---

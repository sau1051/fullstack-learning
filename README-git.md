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

🚫 **Note:** Never commit `.ssh/id_rsa` or GitHub tokens to your public repository. It is bad practice.


---

## ✅ Day 2: Branching, Merging, Conflict Handling

### 1. Create a New Branch
- ✅ GitHub Desktop:  
  `Branch` > `New Branch` → name it `feature-git-advanced`
- 💻 CLI:
  ```bash
  git checkout -b feature-git-advanced
  ```

---

### 2. Make Changes in `feature-git-advanced`
- ✅ GitHub Desktop:  
  Open project in VS Code, edit `README-git.md`, save file
- 💻 CLI:  
  Edit files in any editor, then continue

---

### 3. Commit Changes
- ✅ GitHub Desktop:  
  Bottom-left → write commit message → Click `Commit to feature-git-advanced`
- 💻 CLI:
  ```bash
  git add .
  git commit -m "Updated Git steps for branching and merging"
  ```

---

### 4. Publish the New Branch (first time only)
- ✅ GitHub Desktop:  
  Top-right → Click `Publish branch` (appears only once per new branch)
  💡 Note: If GitHub Desktop hangs or fails to publish, use the CLI instead.
- 💻 CLI:
  ```bash
  git push --set-upstream origin feature-git-advanced
  ```

---

### 5. Switch to `main` Branch
- ✅ GitHub Desktop:  
  `Branch` > `main`
- 💻 CLI:
  ```bash
  git checkout main
  ```

---

### 6. (Optional) Simulate a Conflict
- ✅ GitHub Desktop:  
  Make changes in `README-git.md` in the same lines as the feature branch
  → Commit from main
- 💻 CLI:
  ```bash
  # Edit README-git.md
  git add .
  git commit -m "Made conflicting change in main"
  ```

---

### 7. Merge the Feature Branch into Main
- ✅ GitHub Desktop:  
  `Branch` > `Merge into Current Branch` → select `feature-git-advanced`
- 💻 CLI:
  ```bash
  git merge feature-git-advanced
  ```

---

### 8. Resolve Merge Conflicts (if any)
- ✅ GitHub Desktop:  
  VS Code will highlight conflicts → manually edit → save file  
  → Return to GitHub Desktop → Click `Commit merge`
- 💻 CLI:
  ```bash
  # After resolving manually
  git add .
  git commit -m "Resolved merge conflict"
  ```

---

### 9. Push Merged Main to GitHub
- ✅ GitHub Desktop:  
  Top-right → Click `Push origin`
- 💻 CLI:
  ```bash
  git push origin main
  ```

---

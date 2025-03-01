# 📖 Slidev Repo Template

This repository serves as a template for creating and hosting multiple [Slidev](https://sli.dev/) presentations in a single project. Follow the steps below to set up and deploy your slides.

## 🚀 Usage

1. **Use the Template**  
   Click **"Use this template"** on GitHub to create your own repository.  

2. **Clone the Repository**  
   ```sh
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
   ```

3. **Add a New Slide**  
   Run the following command to create a new Slidev presentation:  
   ```sh
   pnpm create slidev
   ```
   When prompted for the `Project name`, enter:  
   ```
   slides/<your-slide-name>
   ```

4. **Build the Project Locally (Optional)**  
   To generate the slides, simply run:  
   ```sh
   pnpm build
   ```
   This will build all slides and output them to the `dist/` folder.

5. **Commit and Push to GitHub**  
   ```sh
   git add .
   git commit -m "Add new slides"
   git push origin main
   ```

6. **Access Your Slides**  
   Once deployed via GitHub Pages, you can access each slide at:  
   ```
   https://<your-username>.github.io/<your-repo-name>/<slide-subfolder>
   ```
   Example: If your repository is `my-slides` and you created a slide in `slides/talk1`, it will be available at:  
   ```
   https://<your-username>.github.io/my-slides/talk1
   ```

## 🔧 Additional Commands

- **Start Slidev in Development Mode**  
  ```sh
  pnpm --filter "./slides/<your-slide-name>" run dev
  ```
  This runs the selected slide in development mode with hot reload.

- **Build a Single Slide Manually**  
  ```sh
  pnpm --filter "./slides/<your-slide-name>" run build --base "./<your-slide-name>" -o "dist/<your-slide-name>"
  ```

## 🛠️ Troubleshooting

- **Using Custom Domain in Github Pages**

If you're using custom domain, eg. `talks.domain.com`, we need to update the base to correctly load the assets. In `.github/workflows/deploy.yml`, update `line 50` to:

```sh
pnpm --filter "./slides/$slide" run build --base "/$slide" -o "../../dist/$slide"
```
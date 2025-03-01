const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")

const distDir = path.resolve(__dirname, "dist")
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true })
}

const slidesDir = path.resolve(__dirname, "slides")
const slides = fs.readdirSync(slidesDir)

const repoName = path.basename(process.cwd())

slides.forEach((slide) => {
  const slidePath = `./slides/${slide}`
  console.log(`Building ${slide}...`)
  execSync(
    `pnpm --filter "${slidePath}" run build --base "/${repoName}/${slide}" -o "../../dist/${slide}"`,
    {
      stdio: "inherit"
    }
  )
})

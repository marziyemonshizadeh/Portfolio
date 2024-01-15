import { motion } from "framer-motion";
import Skill from "./skill";

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-screen  flex flex-col items-center justify-center space-y-8 overflow-hidden"
    >
      <h2 className="title">SKILLS</h2>
      <div className="absolute md:top-36 top-28 grid lg:grid-cols-4  md:grid-cols-3 grid-cols-2 md:gap-5 gap-2">
        <Skill
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/640px-React_Logo_SVG.svg.png"
          Percent="80"
        />
        <Skill
          img="https://mongodb.gallerycdn.vsassets.io/extensions/mongodb/mongodb-vscode/1.3.1/1696876373173/Microsoft.VisualStudio.Services.Icons.Default"
          Percent="30"
        />
        <Skill
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png"
          Percent="90"
        />
        <Skill
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png"
          Percent="60"
        />
        <Skill
          img="https://media.crystallize.com/crystallize_marketing/23/1/14/6/next_js_logo.svg"
          Percent="60"
        />
        <Skill
          img="https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_171157.png"
          Percent="50"
        />
        <Skill img="https://i.stack.imgur.com/PgcSR.png" Percent="90" />
        <Skill
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/340px-CSS3_logo_and_wordmark.svg.png"
          Percent="90"
        />
        <Skill
          img="https://static-00.iconduck.com/assets.00/file-type-typescript-icon-2048x1349-0um6gqic.png"
          Percent="30"
        />
        <Skill
          img="https://static.vecteezy.com/system/resources/previews/027/127/560/original/javascript-logo-javascript-icon-transparent-free-png.png"
          Percent="70"
        />
        <Skill
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
          Percent="70"
        />
        <Skill
          img="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
          Percent="70"
        />
        <Skill
          img="https://iconape.com/wp-content/png_logo_vector/redux-logo.png"
          Percent="60"
        />
      </div>
    </motion.div>
  );
}

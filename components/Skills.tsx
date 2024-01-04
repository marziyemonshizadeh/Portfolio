import Skill from "./skill";

export default function Skills() {
  return (
    <div className="relative h-screen  flex flex-col items-center justify-center">
      <h2 className="absolute md:top-20 top-8 tracking-[20px] uppercase my-5">
        SKILLS
      </h2>
      <div className="absolute top-36 grid grid-cols-4 gap-5">
        <Skill img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/640px-React_Logo_SVG.svg.png" />
        <Skill img="https://mongodb.gallerycdn.vsassets.io/extensions/mongodb/mongodb-vscode/1.3.1/1696876373173/Microsoft.VisualStudio.Services.Icons.Default" />
        <Skill img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png" />
        <Skill img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png" />
        <Skill img="https://media.crystallize.com/crystallize_marketing/23/1/14/6/next_js_logo.svg" />
        <Skill img="https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_171157.png" />
        <Skill img="https://i.stack.imgur.com/PgcSR.png" />
        <Skill img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/340px-CSS3_logo_and_wordmark.svg.png" />
        <Skill img="https://static-00.iconduck.com/assets.00/file-type-typescript-icon-2048x1349-0um6gqic.png" />
        <Skill img="https://static.vecteezy.com/system/resources/previews/027/127/560/original/javascript-logo-javascript-icon-transparent-free-png.png" />
        <Skill img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" />
        <Skill img="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" />
        <Skill img="https://iconape.com/wp-content/png_logo_vector/redux-logo.png" />
      </div>
    </div>
  );
}

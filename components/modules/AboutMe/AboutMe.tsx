type Props = {};
// tfc
function AboutMe({}: Props) {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h2 className="title">ABOUT ME</h2>
      <div className="flex md:flex-row flex-col justify-center gap-9 md:mx-56 mx-20">
        <img
          src="https://images.sr.roku.com/idType/roku/context/global/id/c636c4b3bad55f6cac5a2729d64d0753/images/gracenote/person/assets/1015004_v9_aa.jpg/magic/396x0/filters:quality(70)"
          alt="u"
          className="max-h-72 object-contain"
        />
        <div className="text-zinc-400">
          <h2 className="my-4 font-bold">Here is the little background</h2>
          <p>
            I am Marzieh Menshizadeh, a computer engineer and front-end
            programmer, I am an accurate, responsible and hardworking person, I
            am eager to learn new technologies. I am very interested in math and
            programming. I started learning Front End almost two years ago and
            am currently learning TypeScript and Next js !
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

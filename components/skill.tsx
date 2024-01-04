type Props = {
  img: string;
};

const Skill = ({ img }: Props) => {
  return (
    <div className="border border-gray-400 rounded-full p-2.5">
      <img src={img} alt="skil" className="w-20 h-20 object-contain" />
    </div>
  );
};

export default Skill;

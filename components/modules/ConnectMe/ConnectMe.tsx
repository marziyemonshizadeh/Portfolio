import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function ConnectMe() {
  return (
    <div className="py-10">
      <h2 className="-tracking-tighter text-center my-5">CONNECT ME</h2>
      <div className="text-zinc-400 leading-10">
        <div className="flex justify-center items-center gap-3">
          <FaPhoneAlt className="text-orange-600" />
          +9354374790
        </div>
        <div className="flex justify-center items-center gap-3">
          <FaEnvelope className="text-orange-600" />
          MarziehMonshizade@yahoo.com
        </div>
        <div className="flex justify-center items-center gap-3">
          <FaMapMarkerAlt className="text-orange-600" />
          Teh,SouthJannatabad
        </div>
      </div>
    </div>
  );
}

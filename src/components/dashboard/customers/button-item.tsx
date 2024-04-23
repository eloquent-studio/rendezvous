import Image from "next/image";

const ButtonItem = ({ fullname, email, onClick, deleteClick }: any) => {
    return <li onClick={onClick} className="border cursor-pointer border-gray-300 bg-gray-50 text-black flex flex-row rounded-lg p-2 mx-4 my-2">
        {/* <div className="flex h-full justify-center items-center pt-1">
            <Image
                src={`https://ui-avatars.com/api/?name=${"MustafaKemal"}`}
                id="output"
                width={36}
                height={36}
                className="rounded-full w-8 h-8"
                alt="profile image"
            />
        </div> */}
        <div className="flex flex-col justify-evenly ml-2 px-2">
            <div className="uppercase text-sm font-medium">{fullname ?? ""}</div>
            <div className="text-xs">{email}</div>
        </div>
        <button onClick={deleteClick} className="ml-auto hover:text-red-400">
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M292.309-140.001q-29.923 0-51.115-21.193-21.193-21.192-21.193-51.115V-720h-40v-59.999H360v-35.384h240v35.384h179.999V-720h-40v507.691q0 30.308-21 51.308t-51.308 21H292.309ZM680-720H280v507.691q0 5.385 3.462 8.847 3.462 3.462 8.847 3.462h375.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463V-720ZM376.155-280h59.999v-360h-59.999v360Zm147.691 0h59.999v-360h-59.999v360ZM280-720v520-520Z" /></svg>
        </button>
    </li>
}

export default ButtonItem;
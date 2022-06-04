import { User as AppUser } from '~/components/domain/auth/db/addNewUser';
import { SearchCircleIcon } from '@heroicons/react/outline';

type UserInfoProps = {
  user: AppUser;
};
const UserInfo = ({ user }: UserInfoProps) => {
  return (
    <div className="justify-self-start">
      <div className="avatar">
        <div className="w-12 m-2 rounded-full ring ring-primary">
          <img src={user.avatar} alt="user avatar" />
        </div>
      </div>
      <div className="ml-2 flex flex-col items-start">
        <h3 className="text-3xl m-0">{user.displayName}</h3>
        <div className="flex gap-1 items-center tooltip tooltip-right" data-tip="Twoje złote lupy">
          <SearchCircleIcon className="w-7" />
          <h3 className="text-2xl font-bold m-0">{user.points}</h3>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

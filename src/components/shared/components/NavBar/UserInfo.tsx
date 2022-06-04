import { SignOutButton } from '~/components/domain/auth/components/SignOutButton';
import { User as AppUser } from '~/components/domain/auth/db/addNewUser';
import { heroImage } from '~/components/domain/select-mode/utils/heroTypes';
import GoldGlass from '../GoldGlass';

type UserInfoProps = {
  user: AppUser;
};
const UserInfo = ({ user }: UserInfoProps) => {
  console.log(user);
  return (
    <div className="flex gap-4 items-stretch">
      <img src={heroImage[user.currentHero]} alt="user hero" className="w-20" />

      <div
        className="my-2 flex items-center tooltip tooltip-bottom px-4 border-x-2 border-accent"
        data-tip="Twoje złote lupy"
      >
        <GoldGlass />
        <h3 className="text-4xl font-bold m-0">{user.points}</h3>
      </div>

      <div className="avatar self-center">
        <div className="w-12 h-12 rounded-full ring ring-accent">
          <img src={user.avatar} alt="user avatar" />
        </div>
      </div>

      <h3 className="self-center text-3xl m-0">{user.displayName}</h3>
      <SignOutButton />
    </div>
  );
};

export default UserInfo;

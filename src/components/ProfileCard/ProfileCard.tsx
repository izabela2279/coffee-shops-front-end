// assets
import defaultPic from '../../assets/icons/profile.png'

// components
import RatingManager from '../RatingManager/RatingManager'

// types
import { Profile } from '../../types/models'

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard = (props: ProfileCardProps): JSX.Element => {
  const { profile } = props

  const profilePic = profile.photo ? profile.photo : defaultPic

  return (
    <article>
      <img src={profilePic} alt={`${profile.name}`} />
      <h1>{profile.name}</h1>
      <RatingManager { ...props } />
    </article>
  )
}

export default ProfileCard
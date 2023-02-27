// assets
import defaultPic from '../../assets/icons/profile.png'

// components
import RatingManager from '../RatingManager/RatingManager'

// types
import { Profile } from '../../types/models'
import { RatingManagerFormData } from '../../types/forms'

interface ProfileCardProps {
  profile: Profile;
  handleRating: (formData: RatingManagerFormData) => void;
}

const ProfileCard = (props: ProfileCardProps): JSX.Element => {
  const { profile } = props

  const profilePic = profile.photo ? profile.photo : defaultPic

  return (
    <article>
      <img src={profilePic} alt={`${profile.name}`} />
      <h2>{profile.name}</h2>
      <RatingManager { ...props } />
    </article>
  )
}

export default ProfileCard
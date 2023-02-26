// types
import { Profile } from '../../types/models'

interface ProfilesProps {
  profiles: Profile[];
}

const Profiles = (props: ProfilesProps): JSX.Element => {
  const { profiles } = props

  if(!profiles.length) return <p>No profiles yet</p>

  return (
    <>
      <h1>Coffee Shops</h1>
      {profiles.map((profile: Profile) =>
        <p key={profile.id}>{profile.name}</p>
      )}
    </>
  )
}

export default Profiles

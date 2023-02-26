// assets
import coffeeBeans from '../../assets/icons/coffeeBeans.png'
import noCoffeeBeans from '../../assets/icons/noCoffeeBeans.png'

// types
import { Profile } from '../../types/models'

interface RatingManagerProps {
	profile: Profile;
}

const RatingManager = (props: RatingManagerProps): JSX.Element => {
	const { profile } = props

  const ratingOptions: [ 1, 2, 3, 4, 5 ] = [ 1, 2, 3, 4, 5 ]
  const ratingCount = profile.ratingsReceived.length
  let ratingSum = 0

  profile.ratingsReceived.forEach(rating => ratingSum += rating.value)
  
  const profileRating = ratingCount ? ratingSum / ratingCount : 1

  return (
    <section>
      {ratingOptions.map((rating: number): JSX.Element => (
        <img
          id={rating.toString()}
          key={rating}
          src={rating <= profileRating ? coffeeBeans : noCoffeeBeans}
					alt="Bean Symbol"
        />
      ))}
    </section>
  )
}

export default RatingManager

// assets
import coffeeBeans from '../../assets/icons/coffeeBeans.png'
import noCoffeeBeans from '../../assets/icons/noCoffeeBeans.png'

// types
import { Profile } from '../../types/models'
import { RatingManagerFormData } from '../../types/forms'
import React from 'react';

interface RatingManagerProps {
	profile: Profile;
  handleRating: (FormData: RatingManagerFormData) => void;
}

const RatingManager = (props: RatingManagerProps): JSX.Element => {
	const { profile, handleRating } = props

  const ratingOptions: [ 1, 2, 3, 4, 5 ] = [ 1, 2, 3, 4, 5 ]
  const ratingCount = profile.ratingsReceived.length
  let ratingSum = 0

  profile.ratingsReceived.forEach(rating => ratingSum += rating.value)
  
  const profileRating = ratingCount ? ratingSum / ratingCount : 1

  const handleClick = (evt: React.MouseEvent<HTMLImageElement>): void => {
    const newValue = parseInt(evt.currentTarget.id)

    handleRating({ value: newValue, profileId: profile.id })
  }

  return (
    <section>
      {ratingOptions.map((rating: number): JSX.Element => (
        <img
          id={rating.toString()}
          key={rating}
          onClick={handleClick}
          src={rating <= profileRating ? coffeeBeans : noCoffeeBeans}
					alt="Bean Symbol"
        />
      ))}
    </section>
  )
}

export default RatingManager

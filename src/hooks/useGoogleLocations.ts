import { useMemo } from "react";

import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";

export function useGoogleLocations() {
  const { placePredictions, getPlacePredictions, isPlacePredictionsLoading } =
    usePlacesService({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_LOCATION_API_KEY,
    });

  const options = useMemo(
    () =>
      placePredictions.map((place) => ({
        label: place.description,
        value: place.place_id,
      })),
    [placePredictions]
  );

  const handleChange = (value: string) => {
    getPlacePredictions({ input: value });
  };

  return {
    options,
    handleChange,
    loading: isPlacePredictionsLoading,
  };
}

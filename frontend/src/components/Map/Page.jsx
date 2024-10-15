import { APIProvider, useMapsLibrary } from '@vis.gl/react-google-maps';

export default function Page() {
  return (
    &lt;APIProvider apiKey={'YOUR_API_KEY'}&gt;
      &lt;Geocoding /&gt;
    &lt;/APIProvider&gt;
  );
}

function Geocoding() {
  const geocodingLibrary = useMapsLibrary('geocoding');
  useEffect(() =&gt; {
    if (!geocodingLibrary) return;

    const geocoder = new geocodingLibrary.Geocoder();
    // ...
  }, [geocodingLibrary]);
}
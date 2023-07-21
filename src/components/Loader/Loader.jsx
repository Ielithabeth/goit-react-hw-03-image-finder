import { InfinitySpin } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className="Spinner">
      <InfinitySpin
        width="200"
        color="#000000"
        visible={true}
      />
    </div>
  );
};
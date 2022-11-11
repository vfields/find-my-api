import './SavedContainer.css';

interface Api {
  id: string;
  title: string;
  description: string;
  auth: string;
  https: boolean;
  cors: string;
  url: string;
  category: string;
}

interface SavedContainerProps {
  savedApis: Api[];
}

const SavedContainer = ({ savedApis }: SavedContainerProps) => {
  // savedApis are passed correctly!
  return (
    <section className="saved-apis-section">
      I am SavedContainer
    </section>
  );
}

export default SavedContainer;
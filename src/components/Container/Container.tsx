import './Container.css';
import ApiCard from '../ApiCard/ApiCard';

interface Api {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
}

interface ContainerProps {
  apis: Api[];
}

const Container = ({ apis }: ContainerProps) => {
  let apiList;

  apiList = apis.map((api, index) => {
    return (
      <ApiCard
        key={index}
        title={api.API}
        description={api.Description}
        category={api.Category}
      />
    )
  })

  return (
    <section>
      {apiList}
    </section>
  );
}

export default Container;
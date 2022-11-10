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
  keyword: string;
}

const Container = ({ apis, keyword }: ContainerProps) => {
  let apiList;

  if (!keyword) {
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
  } else if (keyword) {
    apiList = apis.reduce((acc: JSX.Element[], api, index) => {
      if (api.API.toLowerCase().includes(keyword.toLowerCase()) || api.Description.toLowerCase().includes(keyword.toLowerCase())) {
        acc.push(
        <ApiCard
          key={index}
          title={api.API}
          description={api.Description}
          category={api.Category}
        />)
      }
      return acc;
    }, [])
  }

  return (
    <section>
      {/* <h2>*A number of* APIs Remain...</h2>
      <button>Show Me!</button> */}
      {/* on button click, apiList is displayed! */}
      {apiList}
    </section>
  );
}

export default Container;
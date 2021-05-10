import { useInfiniteList } from 'hooks/infiniteList.hook';

export function Dashboard(props:any) {
  const { infiniteListState, infiniteListAction  } = useInfiniteList('https://pokeapi.co/api/v2/pokemon')
  return (
    <div>
      
    </div>
  );
}
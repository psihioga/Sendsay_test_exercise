import Link from "./Links";

interface link {
    link: string,
    path: string,
    active?: boolean,
}

const LinksArr: link[] = [
    {
        link: "home",
        path: "/",
        active: true
    },
    {
        link: "tables",
        path: "/tables"
    },
    {
      link: "add forms",
      path: "/forms"
    },
];


export default function Header() {
  return (
    <header className="flex justify-center gap-4 mt-4">
      {LinksArr.map(item => (
        <Link link={item.link} path={item.path} active={item.active ? true : false}/>
      ))}
      <span>ssssdsa</span>
    </header>
  );
}

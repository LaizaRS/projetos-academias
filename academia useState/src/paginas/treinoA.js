import MenuLink from '../componentes/MenuLink';

export default function Menu() {
  return (
    <header>
      <nav>
        <MenuLink to="/">
          Início
        </MenuLink>
        <MenuLink to="/A">
          A
        </MenuLink>
        <MenuLink to="/B">
          B
        </MenuLink>
        <MenuLink to="/C">
          C
        </MenuLink>
        <MenuLink to="/D">
          D
        </MenuLink>
        <MenuLink to="/E">
          E
        </MenuLink>
        <MenuLink to="/F">
          F
        </MenuLink>
      </nav>
    </header>
  )
}
export default interface App extends React.Component {

  readonly icon: string;

  destroy(): Promise<void>

}
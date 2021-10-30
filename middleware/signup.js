export default function({from, redirect}) {
  if ( !(from && from.path === '/signup/step-1') ) {
    redirect('/signup/step-1')
  }
}

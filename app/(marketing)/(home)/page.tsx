import { SignOutButton } from '@marketing/_ui/sign-out-button'
import { getServerSession } from 'next-auth'

export default async function Page() {
  const session = await getServerSession()
  return (
    <div className="prose mx-auto mt-12  lg:prose-2xl">
      {session && <SignOutButton />}
      <h1>Getting Started</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        assumenda distinctio fugit possimus reiciendis sequi, similique. Aperiam
        aut dolorem doloribus eligendi facilis fuga incidunt maxime odio omnis
        quam, sequi, tempore.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        assumenda distinctio fugit possimus reiciendis sequi, similique. Aperiam
        aut dolorem doloribus eligendi facilis fuga incidunt maxime odio omnis
        quam, sequi, tempore.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        assumenda distinctio fugit possimus reiciendis sequi, similique. Aperiam
        aut dolorem doloribus eligendi facilis fuga incidunt maxime odio omnis
        quam, sequi, tempore.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        assumenda distinctio fugit possimus reiciendis sequi, similique. Aperiam
        aut dolorem doloribus eligendi facilis fuga incidunt maxime odio omnis
        quam, sequi, tempore.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        assumenda distinctio fugit possimus reiciendis sequi, similique. Aperiam
        aut dolorem doloribus eligendi facilis fuga incidunt maxime odio omnis
        quam, sequi, tempore.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        assumenda distinctio fugit possimus reiciendis sequi, similique. Aperiam
        aut dolorem doloribus eligendi facilis fuga incidunt maxime odio omnis
        quam, sequi, tempore.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        assumenda distinctio fugit possimus reiciendis sequi, similique. Aperiam
        aut dolorem doloribus eligendi facilis fuga incidunt maxime odio omnis
        quam, sequi, tempore.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        assumenda distinctio fugit possimus reiciendis sequi, similique. Aperiam
        aut dolorem doloribus eligendi facilis fuga incidunt maxime odio omnis
        quam, sequi, tempore.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        assumenda distinctio fugit possimus reiciendis sequi, similique. Aperiam
        aut dolorem doloribus eligendi facilis fuga incidunt maxime odio omnis
        quam, sequi, tempore.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        assumenda distinctio fugit possimus reiciendis sequi, similique. Aperiam
        aut dolorem doloribus eligendi facilis fuga incidunt maxime odio omnis
        quam, sequi, tempore.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        assumenda distinctio fugit possimus reiciendis sequi, similique. Aperiam
        aut dolorem doloribus eligendi facilis fuga incidunt maxime odio omnis
        quam, sequi, tempore.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        assumenda distinctio fugit possimus reiciendis sequi, similique. Aperiam
        aut dolorem doloribus eligendi facilis fuga incidunt maxime odio omnis
        quam, sequi, tempore.
      </p>
    </div>
  )
}

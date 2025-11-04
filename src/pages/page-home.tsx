import Container from "../components/components/Container/Container";
import StatusTask from "../components/to-do-components/StatusTasks";
import SetTasks from "../components/to-do-components/SetTasks";
import Task from "../components/to-do-components/Task";

export default function PageHome() {
  return (
    <Container as="article" className="space-y-3">
      <header className="flex justify-between">
        <StatusTask />
      </header>
      <section >
        <SetTasks />
      </section>
      <section>
        <Task />
      </section>
    </Container>
  )
}
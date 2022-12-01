export default function guardrail(mathFunction) {
  const queue = [];

  try {
    queue.push(mathFunction());
    queue.push('Guardrail was processed');
  } catch (error) {
    queue.push(`Èrror: ${error.message}`);
    queue.push('Guardrail was processed');
  }
  return queue;
}

import { BasicEvaluator, IRunnerPlugin } from "@sourceacademy/conductor";

class EchoEvaluator extends BasicEvaluator {
  private count = 0;
  constructor(conductor: IRunnerPlugin) {
    super(conductor);
  }
  async evaluateChunk(chunk: string): Promise<void> {
    this.count++;
    this.conductor.sendOutput(`[echo ${this.count}] ${chunk}`);
  }
}

export default EchoEvaluator;
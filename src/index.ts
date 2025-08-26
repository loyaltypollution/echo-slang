import { initialise } from "@sourceacademy/conductor";
import EchoEvaluator from "./EchoEvaluator";

const {runnerPlugin, conduit} = initialise(EchoEvaluator);
export abstract class Registry<E = unknown, C = string> {

  readonly entries = new Map<E, C>();

}

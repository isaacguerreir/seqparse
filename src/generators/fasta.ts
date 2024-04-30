import { Seq } from "..";

export default function(seq: Seq) {
  return `>${seq.name}\n${seq.seq}\n`
}

import { Seq } from ".";
import fasta from "./generators/fasta";
import genbank from "./generators/genbank";

/*
 *  Implementation at first of genbank and fasta (most used formats). 
 *  Incorporate new file formats by changing FileType strings variables
 *  acceptable and adding case and function for each format.
 */
type FileType = "genbank" | "gb" | "gbk" | "fasta" | "FASTA"

export default function(seq: Seq, fileType: FileType) {
  switch (fileType) {
    case "genbank":
    case "gb":
    case "gbk":
      return genbank(seq)
    case "fasta":
    case "FASTA":
    default:
      return fasta(seq)
  }
}

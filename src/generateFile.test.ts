import { Seq } from ".";
import generateFile from "./generateFile";

const testGenerator: Seq = {
  annotations: [
    {
      end: 11,
      name: "BBa_B0034_annotation",
      start: 0,
    },
    {
      end: 773,
      name: "BBa_C0062_annotation",
      start: 18,
    },
    {
      end: 935,
      name: "BBa_B0015_annotation",
      start: 807,
    },
  ],
  name: "BBa_I0462",
  seq: "aaagaggagaaatactagatgaaaaacataaatgccgacgacacatacagaataattaataaaattaaagcttgtagaagcaataatgatattaatcaatgcttatctgatatgactaaaatggtacattgtgaatattatttactcgcgatcatttatcctcattctatggttaaatctgatatttcaatcctagataattaccctaaaaaatggaggcaatattatgatgacgctaatttaataaaatatgatcctatagtagattattctaactccaatcattcaccaattaattggaatatatttgaaaacaatgctgtaaataaaaaatctccaaatgtaattaaagaagcgaaaacatcaggtcttatcactgggtttagtttccctattcatacggctaacaatggcttcggaatgcttagttttgcacattcagaaaaagacaactatatagatagtttatttttacatgcgtgtatgaacataccattaattgttccttctctagttgataattatcgaaaaataaatatagcaaataataaatcaaacaacgatttaaccaaaagagaaaaagaatgtttagcgtgggcatgcgaaggaaaaagctcttgggatatttcaaaaatattaggttgcagtgagcgtactgtcactttccatttaaccaatgcgcaaatgaaactcaatacaacaaaccgctgccaaagtatttctaaagcaattttaacaggagcaattgattgcccatactttaaaaattaataacactgatagtgctagtgtagatcactactagagccaggcatcaaataaaacgaaaggctcagtcgaaagactgggcctttcgttttatctgttgtttgtcggtgaacgctctctactagagtcacactggctcaccttcgggtgggcctttctgcgtttata",
  type: "dna",
}



describe("Generate files", () => {
  it("Seq to genbank file", async () => {
    const expectedFileContent = `LOCUS       BBa_I0462       936 bp       dna       linear       SYN       30-APR-2024
DEFINITION .
FEATURES             Location/Qualifiers
     misc_feature    0..11
                     /standard_name="BBa_B0034_annotation"
     misc_feature    18..773
                     /standard_name="BBa_C0062_annotation"
     misc_feature    807..935
                     /standard_name="BBa_B0015_annotation"
        1 aaagaggaga aatactagat gaaaaacata aatgccgacg acacatacag aataattaat
       61 aaaattaaag cttgtagaag caataatgat attaatcaat gcttatctga tatgactaaa
      121 atggtacatt gtgaatatta tttactcgcg atcatttatc ctcattctat ggttaaatct
      181 gatatttcaa tcctagataa ttaccctaaa aaatggaggc aatattatga tgacgctaat
      241 ttaataaaat atgatcctat agtagattat tctaactcca atcattcacc aattaattgg
      301 aatatatttg aaaacaatgc tgtaaataaa aaatctccaa atgtaattaa agaagcgaaa
      361 acatcaggtc ttatcactgg gtttagtttc cctattcata cggctaacaa tggcttcgga
      421 atgcttagtt ttgcacattc agaaaaagac aactatatag atagtttatt tttacatgcg
      481 tgtatgaaca taccattaat tgttccttct ctagttgata attatcgaaa aataaatata
      541 gcaaataata aatcaaacaa cgatttaacc aaaagagaaa aagaatgttt agcgtgggca
      601 tgcgaaggaa aaagctcttg ggatatttca aaaatattag gttgcagtga gcgtactgtc
      661 actttccatt taaccaatgc gcaaatgaaa ctcaatacaa caaaccgctg ccaaagtatt
      721 tctaaagcaa ttttaacagg agcaattgat tgcccatact ttaaaaatta ataacactga
      781 tagtgctagt gtagatcact actagagcca ggcatcaaat aaaacgaaag gctcagtcga
      841 aagactgggc ctttcgtttt atctgttgtt tgtcggtgaa cgctctctac tagagtcaca
      901 ctggctcacc ttcgggtggg cctttctgcg tttata
//
`
    const file = generateFile(testGenerator, "genbank")

    expect(file).toEqual(expectedFileContent);
  });

  it("Seq to fasta file", async () => {
    const expectedFileContent = `>BBa_I0462
aaagaggagaaatactagatgaaaaacataaatgccgacgacacatacagaataattaataaaattaaagcttgtagaagcaataatgatattaatcaatgcttatctgatatgactaaaatggtacattgtgaatattatttactcgcgatcatttatcctcattctatggttaaatctgatatttcaatcctagataattaccctaaaaaatggaggcaatattatgatgacgctaatttaataaaatatgatcctatagtagattattctaactccaatcattcaccaattaattggaatatatttgaaaacaatgctgtaaataaaaaatctccaaatgtaattaaagaagcgaaaacatcaggtcttatcactgggtttagtttccctattcatacggctaacaatggcttcggaatgcttagttttgcacattcagaaaaagacaactatatagatagtttatttttacatgcgtgtatgaacataccattaattgttccttctctagttgataattatcgaaaaataaatatagcaaataataaatcaaacaacgatttaaccaaaagagaaaaagaatgtttagcgtgggcatgcgaaggaaaaagctcttgggatatttcaaaaatattaggttgcagtgagcgtactgtcactttccatttaaccaatgcgcaaatgaaactcaatacaacaaaccgctgccaaagtatttctaaagcaattttaacaggagcaattgattgcccatactttaaaaattaataacactgatagtgctagtgtagatcactactagagccaggcatcaaataaaacgaaaggctcagtcgaaagactgggcctttcgttttatctgttgtttgtcggtgaacgctctctactagagtcacactggctcaccttcgggtgggcctttctgcgtttata
`
    const file = generateFile(testGenerator, "fasta")

    expect(file).toEqual(expectedFileContent);
  });
})

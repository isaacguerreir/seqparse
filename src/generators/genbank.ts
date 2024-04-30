import { Seq } from '..';

const space = '     ';

function getMolecularType(type: string) {
  switch (type) {
    case 'dna':
    case 'rna':
    case 'aa':
      return type
    default:
      return 'ukn'
  }
}

export default function(seq: Seq) {
  let fileContent = '';

  const molecularType = getMolecularType(seq.type)

  const [month, day, year] = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  }).format(new Date())
    .replace(",", "")
    .split(" ")
  const modifiedDate = `${day}-${month.toUpperCase()}-${year}`

  fileContent += `LOCUS       ${seq.name} ${space} ${seq.seq.length} bp ${space} ${molecularType} ${space} linear ${space} SYN ${space} ${modifiedDate}\n`;
  fileContent += 'DEFINITION .\n'
  fileContent += 'FEATURES             Location/Qualifiers\n'

  for (const feature of seq.annotations) {
    let featureContent = `${space}misc_feature    ${feature.start}..${feature.end}\n`;
    featureContent += `${space}                /standard_name="${feature.name}"\n`
    fileContent += featureContent
  }

  for (let index = 0; index < seq.seq.length; index++) {
    if (index % 60 === 0) {
      if (index !== 0) {
        fileContent += '\n';
      }
      const lineNumberString = `${index + 1}`; // genbank indexes at 1 for some reason
      const leadingWhiteSpaceLength = 9 - lineNumberString.length; // <- I wish I was kidding
      for (let i = 0; i < leadingWhiteSpaceLength; i++) {
        fileContent += ' ';
      }
      fileContent += lineNumberString + ' ';
      fileContent += seq.seq[index];
    } else if (index % 10 === 0) {
      fileContent += ' ';
      fileContent += seq.seq[index];
    } else {
      fileContent += seq.seq[index];
    }
  }
  fileContent += '\n//\n';

  return fileContent
}


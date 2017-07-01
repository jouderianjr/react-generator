const fs         = require('fs')
const handlebars = require('handlebars')
const mkdirp     = require('mkdirp')
const utils      = require('./utils')
const chalk      = require('chalk')

const reducer = (args, opt) => genericCreation(args, 'reducer')
const component = (args, opt) => genericCreation(args, 'component')

// const component = args => {
//   if (args.length === 0) {
//     console.log(chalk.red('Component name is missing.'))
//     return
//   }

//   const templateArgs = setupArgs(args)

//   const compiled = compileTemplate(
//     getTemplate('component'),
//     templateArgs
//   )

//   const isFileCreated = saveFile(
//     templateArgs.dir,
//     templateArgs.filename,
//     compiled
//   )

//   if ( isFileCreated ) {
//     console.log(chalk.cyan('Component has been created'))
//   } else {
//     console.log(chalk.red('Component could not be created'))
//   }
// }

const genericCreation = (args, type) => {
    if (args.length === 0) {
    console.log(chalk.red(`${type} name is missing.`))
    return
  }

  const templateArgs = setupArgs(args)

  const compiled = compileTemplate(
    getTemplate(type),
    templateArgs
  )

  const isFileCreated = saveFile(
    templateArgs.dir,
    templateArgs.filename,
    compiled
  )

  console.log(chalk.cyan(`${type} has been created`))
}

const setupArgs = (args) => {
  return {
    className : utils.upperCaseFirstLetter(args[0]),
    filename  : utils.lowerCaseFirstLetter(args[0]) + '.js',
    dir       : args[1] || null
  }
}

const compileTemplate = (template, args) => handlebars.compile(template)(args)

const getTemplate = (type) => {
  const  templateUrl = `${__dirname}/../templates/${type}.tpl`

  const template = fs.readFileSync(templateUrl)

  return template.toString()
}

const saveFile = (dir, filename, data) => {
  if ( dir ) {
    const path = `${process.cwd()}/${dir}/${filename}`

    mkdirp.sync(dir)

    writeFile(path, data)
  } else {
    const path = `${process.cwd()}/${filename}`

    writeFile(path, data)
  }
}

const writeFile = (path, data) => {
  try {
    fs.writeFileSync(path, data)
  } catch (e) {
    console.log(chalk.red(`${type} could not be created`))
  }
}

module.exports = {
  component,
  reducer
}
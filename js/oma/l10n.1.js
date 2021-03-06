define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.run = run;
  // Module w3c/l10n
  // Looks at the lang attribute on the root element and uses it to manage the config.l10n object so
  // that other parts of the system can localise their text

  var l10n = exports.l10n = {
    en: {
      this_version: "This version:",
      latest_published_version: "Latest published version:",
      latest_editors_draft: "Latest editor's draft:",
      editor: "Editor:",
      editors: "Editors:",
      author: "Author:",
      authors: "Authors:",
      abstract: "Abstract",
      sotd: "Status of This Document",
      toc: "Table of Contents",
      note: "Note",
      editors_note: "Editor's Note",
      example: "Example",
      issue: "Issue",
      issue_summary: "Issue Summary",
      warning: "Warning",
      fig: "Fig. ",
      table_of_fig: "Table of Figures",
      references: "References",
      norm_references: "Normative references",
      info_references: "Informative references",
      bug_tracker: "Bug tracker:",
      file_a_bug: "file a bug",
      open_bugs: "open bugs",
      open_parens: "(",
      close_parens: ")"
    },
    ko: {
      this_version: "현재 버전:",
      latest_published_version: "최신 버전:",
      latest_editors_draft: "Latest editor's draft:",
      editor: "Editor:",
      editors: "Editors:",
      author: "저자:",
      authors: "저자:",
      abstract: "요약",
      sotd: "현재 문서의 상태",
      toc: "Table of Contents",
      note: "Note",
      editors_note: "Editor's Note",
      example: "Example",
      issue: "Issue",
      issue_summary: "Issue Summary",
      warning: "Warning",
      fig: "그림 ",
      table_of_fig: "Table of Figures",
      references: "References",
      norm_references: "Normative references",
      info_references: "Informative references",
      bug_tracker: "Bug tracker:",
      file_a_bug: "file a bug",
      open_bugs: "open bugs",
      open_parens: "(",
      close_parens: ")"
    },
    zh: {
      this_version: "本版本：",
      latest_published_version: "最新发布草稿：",
      latest_editors_draft: "最新编辑草稿：",
      editor: "编辑：",
      editors: "编辑们：",
      author: "Author:",
      authors: "Authors:",
      abstract: "摘要",
      sotd: "关于本文档",
      toc: "内容大纲",
      note: "注",
      editors_note: "Editor's Note",
      example: "Example",
      issue: "Issue",
      issue_summary: "Issue Summary",
      warning: "Warning",
      fig: "圖",
      table_of_fig: "Table of Figures",
      references: "References",
      norm_references: "Normative references",
      info_references: "Informative references",
      bug_tracker: "错误跟踪：",
      file_a_bug: "反馈错误",
      open_bugs: "修正中的错误",
      open_parens: "（",
      close_parens: "）"
    },
    ja: {
      this_version: "このバージョン：",
      latest_published_version: "最新バージョン：",
      latest_editors_draft: "最新の編集用草案：",
      editor: "編者：",
      editors: "編者：",
      author: "著者：",
      authors: "著者：",
      abstract: "要約",
      sotd: "この文書の位置付け",
      toc: "目次",
      note: "注",
      editors_note: "Editor's Note",
      example: "Example",
      issue: "Issue",
      issue_summary: "Issue Summary",
      warning: "Warning",
      fig: "図",
      table_of_fig: "Table of Figures",
      references: "References",
      norm_references: "Normative references",
      info_references: "Informative references",
      bug_tracker: "バグの追跡履歴：",
      file_a_bug: "File a bug",
      open_bugs: "改修されていないバグ",
      open_parens: "（",
      close_parens: "）"
    },
    nl: {
      this_version: "Deze versie:",
      latest_published_version: "Laatst gepubliceerde versie:",
      latest_editors_draft: "Laatste werkversie:",
      editor: "Redacteur:",
      editors: "Redacteurs:",
      author: "Auteur:",
      authors: "Auteurs:",
      abstract: "Samenvatting",
      sotd: "Status van dit document",
      toc: "Inhoudsopgave",
      note: "Noot",
      editors_note: "Redactionele noot",
      example: "Voorbeeld",
      issue: "Issue",
      issue_summary: "Lijst met issues",
      warning: "Waarschuwing",
      fig: "Figuur ",
      table_of_fig: "Lijst met figuren",
      references: "Referenties",
      norm_references: "Normatieve referenties",
      info_references: "Informatieve referenties",
      bug_tracker: "Meldingensysteem:",
      file_a_bug: "Dien een melding in",
      open_bugs: "open meldingen",
      open_parens: "(",
      close_parens: ")"
    }
  };
  l10n["zh-hans"] = l10n.zh;
  l10n["zh-cn"] = l10n.zh;

  function run(config, doc, cb) {
    var lang = $(doc.documentElement).attr("lang") || "en";
    config.l10n = l10n[lang] ? l10n[lang] : l10n.en;
    cb();
  }
});
//# sourceMappingURL=l10n.1.js.map
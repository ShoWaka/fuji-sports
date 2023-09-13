<?php
// TODO : テーブル名を変更できるように変数化する

try {
    // DB接続
    $pdo = new PDO(
        // ホスト名、データベース名
        'mysql:host=mysql71.onamae.ne.jp;dbname=34832_record;',
        // ユーザー名
        '34832_waka',
        // パスワード
        'hB@35tYsu6#nic-',
        // レコード列名をキーとして取得させる
        [PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]
    );

    // 条件指定したSQL文をセット
    $stmt = $pdo->prepare('SELECT * FROM 2022_10_20_marathon_test');

    // SQL実行
    $stmt->execute();

    $table = "<table id='record_table'>";
    $table .= "<tr>";
    $table .= "<th>ゼッケンNo</th>";
    $table .= "<th>名前</th>";
    $table .= "<th>ゼッケン名</th>";
    $table .= "<th>順位</th>";
    $table .= "<th>タイム</th>";
    $table .= "<th>周回数</th>";
    $table .= "</tr>";


    // 取得したデータを出力
    foreach ($stmt as $row) {
        $table .= "<tr>";
        foreach ($row as $value) {
            $table .= "<td>" . $value . "</td>";
        }
        $table .= "</tr>";
    }
    $table .= "</table>";

    echo $table;
} catch (PDOException $e) {
    // エラー発生
    echo $e->getMessage();
} finally {
    // DBを閉じる
    $pdo = null;
}

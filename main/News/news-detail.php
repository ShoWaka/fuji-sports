<?php //▼▼ 既存ページヘ埋め込み時はまるっとコピペ下さい （この行も含みページ最上部に）※.phpでかつUTF-8のページのみ可▼▼
//※逆にこのページに対して既存のページのhtmlを記述する形でももちろんOKです。
//----------------------------------------------------------------------
// 詳細ページ（ポップアップと兼用）
// 設定ファイルの読み込みとページ独自設定
//----------------------------------------------------------------------
include_once("./pkobo_news/admin/include/config.php"); //（必要に応じてパスは適宜変更下さい）
$img_updir = './pkobo_news/upload'; //画像保存パス（必要に応じてパスは適宜変更下さい）

$id = (!empty($_GET['id'])) ? h($_GET['id']) : exit('パラメータがありません');
$getFormatDataArr = getLines2DspData($file_path, $img_updir, $config, $id);
$dataArr = (!empty($getFormatDataArr)) ? $getFormatDataArr : exit('データが存在しません');
//----------------------------------------------------------------------
// 設定ファイルの読み込みとページ独自設定
//----------------------------------------------------------------------
//▲▲ コピペここまで ▲▲（この行も含む）
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ja" lang="ja">

<head>
	<link rel="stylesheet" href="../css/style.css">
	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	<script src="../js/jq.js"></script>
	<script src="../js/openclose.js"></script>
	<script src="../js/fixmenu_pagetop.js"></script>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title><?php echo h(strip_tags($dataArr['title'])); //タイトルを表示（必要に応じてコピペ下さい）
			?>｜詳細ページ</title>
	<meta http-equiv="Content-Style-Type" content="text/css" />
	<meta name="Keywords" content="" />
	<meta name="Description" content="<?php echo h(strip_tags($dataArr['title'])); //タイトルを表示（必要に応じてコピペ下さい）
										?>" />
	<meta http-equiv="Content-Script-Type" content="text/javascript" />

	<!--▼▼CSS。既存ページヘの埋め込み時はコピペ下さい（head部分に）▼▼-->
	<style type="text/css">
		/* CSSは必要最低限しか指定してませんのでお好みで（もちろん外部化OK） */


		#up_ymd {
			text-align: right;
			font-size: 13px;
			margin: 5px 10px;
		}

		.detailUpfile {
			margin: 5px 0 35px;
			text-align: center;
		}

		.backORcloseBtn {
			text-align: center;
			line-height: 100%;
			margin-top: 15px;
		}

		.backORcloseBtn a {
			display: inline-block;
			padding: 4px 15px;
			border: 1px solid #aaa;
			color: #999;
			border-radius: 6px;
			text-decoration: none;
			font-size: 12px;
		}

		.detailUpfile img {
			max-width: 100%;
			height: auto;
		}

		.pNav {
			font-size: 11px;
		}
	</style>
	<!--▲▲CSS。既存ページヘの埋め込み時　コピペここまで（head部分に）▲▲-->

</head>

<body>
	<header id="header">
			<h1 id="logo">
				<a href="../index.html"><img src="../../images/fujisportsjapan_bk.svg" alt="フジスポーツジャパンロゴ"></a>
			</h1>
			<!--PC用（901px以上端末）メニュー-->
			<nav id="menubar">
				<ul>
					<li class="ddmenu-title"><a href="../eventInfo.html">イベント情報</a></li>
					<li class="ddmenu-title"><a href="../aboutus.html">私達について</a></li>
					<li class="ddmenu-title"><a href="../company.html">会社情報</a></li>
					<li class="ddmenu-title"><a href="../contact.html">お問い合わせ</a></li>
					<li class="ddmenu-title"><a href="../pastEvent.html">過去のイベント</a></li>
			
				</ul>
			</nav>
			<!--小さい端末用（900px以下端末）メニュー-->
			<nav id="mobile_menu" style="display: none;">
				<ul>
					<a href="../eventInfo.html">
						<li class="mobile_title close">イベント情報</li>
					</a>
					<a href="../aboutus.html">
						<li class="mobile_title close">私達について</li>
					</a>
					<a href="../company.html">
						<li class="mobile_title close">会社情報</li>
					</a>
					<a href="../contact.html">
						<li class="mobile_title close">お問い合わせ</li>
					</a>
					<a href="../pastEvent.html">
						<li class="mobile_title close">過去のイベント</li>
					</a>
				</ul>
			</nav>
		</header>
	<!--▼▼埋め込み時はここから以下をコピーして任意の場所に貼り付けてください（html部は自由に編集可）▼▼-->
	<div id="contents">
		<?php if (!$copyright) {
			echo $warningMesse;
			exit;
		} else { ?>

		<?php if ($config['popupFlag'] == 0) { //ポップアップ表示の場合は表示しない
		?>
			<div class="pNav"><a href="./">トップページ</a> &gt; <a href="news.php">お知らせ一覧</a> &gt; <?php echo h(strip_tags($dataArr['title'])); ?></div><!-- パンくずナビ（必要に応じて変更、削除下さい） -->
		<?php } ?>
		<h2><?php echo h(strip_tags($dataArr['title'])); ?></h2>
		<div id="up_ymd"><?php echo h($dataArr['up_ymd']); ?></div>
		<div id="detail">
			<?php
			for ($i = 0; $i <= $maxCommentCount; $i++) {
				if (!empty($dataArr['comment'][$i]) || !empty($dataArr['upfile_path'][$i])) {

					//アップファイル表示用のタグをセット。 画像の場合はimgタグ、その他の場合はファイルにリンクする（タグ部分は自由に変更可）
					$upfileTag = ''; //初期化
					if (!empty($dataArr['upfile_path'][$i])) {
						if ($dataArr['file_type'][$i] == 'img') {
							$upfileTag = '<img src="' . $dataArr['upfile_path'][$i] . '?' . uniqid() . '" />'; //画像の場合のタグ
						} else {
							$linkText = (isset($extensionListText[$dataArr['extension'][$i]])) ? $extensionListText[$dataArr['extension'][$i]] : 'アップファイル（' . $dataArr['extension'][$i] . '）'; //リンクテキストをセット
							$upfileTag = '<a href="' . $dataArr['upfile_path'][$i] . '" target="_blank">' . $linkText . '</a>'; //画像以外の場合のタグ
						}
						$upfileTag = '<div class="detailUpfile">' . $upfileTag . '</div>';
					}
			?>
					<p class="detailText"><?php echo (!empty($dataArr['comment'][$i])) ? $dataArr['comment'][$i] : ''; ?></p>
					<?php echo $upfileTag; ?>
			<?php
				}
			}
			?>
		</div>
		<div class="backORcloseBtn"><?php echo ($config['popupFlag'] == 1) ? '<a href="javascript:window.close()">× 閉じる</a>' : '<a href="javascript:history.back()">&lt;&lt;戻る</a>'; //CLOSEボタン、または戻るボタン
									?></div>
		<?php echo $copyright;
		} //著作権表記削除不可
		?>
	</div>

	<footer>
		<div id="copyright">
			<p><strong>フジスポーツジャパン</strong></p>
			<small>Copyright&copy; フジスポーツジャパン All Rights Reserved.</small>

		</div>
		<!--/#copyright-->
	</footer>
	
	<!--ページの上部に戻る「↑」ボタン-->
		<p class="nav-fix-pos-pagetop toTop"><a href="#">↑</a></p>

		<!--メニュー開閉ボタン-->
		<div id="mobile_hdr" class="close"></div>

		<!-- DO NOT MODIFY (以下ライセンスコード) -->
		<!--License20210703eFptR-->

</body>

</html>